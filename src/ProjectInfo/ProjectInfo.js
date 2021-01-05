import React, { useState, useEffect } from 'react';
import Info from './Info.js';

import Spinner from '../Spinner/Spinner.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  errorMsg: {
    margin: '20px',
    fontSize: '18px',
    textAlign: 'center',
  },
});

const loadDataFromAPI = async projectName => {
  const response = await fetch(`https://api.github.com/repos/${projectName}`);
  if (response.ok) {
    return response.json();
  } else if (response.status === 404 || response.status === 403) {
    throw new Error(response.statusText);
  }
};

const ProjectInfo = ({ projectName }) => {
  let [project, setProject] = useState({
    fullName: '',
    desc: '',
    stars: '',
  });
  let [isLoading, setIsLoading] = useState(true);
  let [errorMessage, setErrorMessage] = useState();

  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    loadDataFromAPI(projectName)
      .then(data => {
        setProject({
          fullName: data.full_name,
          desc: data.description,
          stars: data.stargazers_count,
        });
        setErrorMessage();
      })
      .catch(error => {
        setErrorMessage(`Oops! Something went wrong... ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [projectName]);

  if (errorMessage) {
    return <p className={classes.errorMsg}>{errorMessage}</p>;
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
      <Info
        prjName={project.fullName}
        prjDesc={project.desc}
        prjStars={project.stars}
      />
    );
  }
};

export default React.memo(ProjectInfo);
