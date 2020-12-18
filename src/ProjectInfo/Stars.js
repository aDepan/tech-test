import React from 'react';

import { createUseStyles } from 'react-jss';

const cropStarsAmount = starsAmount => {
  if (starsAmount > 1000) {
    return (starsAmount / 1000).toFixed(1) + ' K';
  }

  if (starsAmount > 1000000) {
    return (starsAmount / 1000).toFixed(1) + ' M';
  }

  return starsAmount;
};

const useStyles = createUseStyles({
  stars: {
    gridColumnStart: 1,
    marginTop: 0,
    fontSize: '18px',
  },
});

const Stars = ({ prjStars }) => {
  const classes = useStyles();
  const showedStars = cropStarsAmount(prjStars);

  return (
    <p className={classes.stars}>
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
  );
};

export default React.memo(Stars);
