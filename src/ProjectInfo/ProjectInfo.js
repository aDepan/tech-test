import React, { useState } from 'react';
import Info from './Info.js';

import Spinner from '../Spinner/Spinner.js';
import { createUseStyles } from 'react-jss';

const projects = [
  'eslint/eslint',
  'oakwood/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express',
];

const useStyles = createUseStyles({
  errorMsg: {
    margin: '20px',
    fontSize: '18px',
    textAlign: 'center',
  },
});

const ProjectInfo = props => {
  let [project, setProject] = useState({
    id: -1,
    fullName: '',
    desc: '',
    stars: '',
  });
  let [isLoading, setIsLoading] = useState(true);
  let [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();

  let currentPrjName = projects[props.prjId];

  if (project.id !== props.prjId) {
    fetch(`https://api.github.com/repos/${currentPrjName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404 || response.status === 403) {
          throw new Error(response.statusText);
        }
      })

      .then(data => {
        if (data) {
          setProject({
            id: props.prjId,
            fullName: data.full_name,
            desc: data.description,
            stars: data.stargazers_count,
          });
        }
        setErrorMessage('');
        setIsLoading(false);
      })
      .catch(error => {
        setProject({ id: props.prjId });
        setErrorMessage(`Oops! Something went wrong... ${error}`);
        setIsLoading(false);
      });
  }

  if (errorMessage) {
    return <p className={classes.errorMsg}>{errorMessage}</p>;
  } else {
    return isLoading ? <Spinner /> : <Info project={project} />;
  }
};

export default ProjectInfo;
