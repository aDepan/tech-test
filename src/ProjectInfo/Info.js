import React from 'react';

import gitHubLogo from '../Images/Octocat.jpg';
import Stars from './Stars';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  infoBlock: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: 'fit-content',
    maxWidth: '500px',
    margin: '30px auto',
    alignItems: 'center',
    justifyItems: 'left',
  },
  name: {
    textTransform: 'uppercase',
  },

  logo: {
    width: '100px',
    gridRowStart: 1,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 2,
    margin: 'auto',
  },

  desc: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
});

const Info = ({ prjName, prjStars, prjDesc }) => {
  const classes = useStyles();

  return (
    <div className={classes.infoBlock}>
      <img src={gitHubLogo} className={classes.logo} alt='Logo from github' />
      <h2 className={classes.name}>{prjName}</h2>
      <Stars prjStars={prjStars} />
      <p className={classes.desc}>{prjDesc}</p>
    </div>
  );
};

export default React.memo(Info);
