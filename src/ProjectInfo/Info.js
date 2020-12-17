import React from 'react';

import gitHubLogo from '../Images/Octocat.jpg';

import { createUseStyles } from 'react-jss';

const cropStarsAmount = starsAmount => {
  if (starsAmount > 1000) {
    starsAmount = (starsAmount / 1000).toFixed(1) + ' K';
  }

  if (starsAmount > 1000000) {
    starsAmount = (starsAmount / 1000).toFixed(1) + ' M';
  }

  return starsAmount;
};

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
  namePrj: {
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
  starsPrj: {
    gridColumnStart: 1,
    marginTop: 0,
    fontSize: '18px',
  },

  descPrj: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
});

const Info = props => {
  const classes = useStyles();
  let showedStars = cropStarsAmount(props.project.stars);
  return (
    <div className={classes.infoBlock}>
      <img src={gitHubLogo} className={classes.logo} alt='Logo from github' />
      <h2 className={classes.namePrj}>{props.project.fullName}</h2>
      <p className={classes.starsPrj}>
        {showedStars}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='16'
          viewBox='0 0 20 22'
        >
          <path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z' />
        </svg>
      </p>
      <p className={classes.descPrj}>{props.project.desc}</p>
    </div>
  );
};

export default Info;
