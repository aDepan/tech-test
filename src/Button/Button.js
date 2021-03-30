import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    padding: '15px 30px',
    borderRadius: '35px',
    outline: 'none',
    textTransform: 'uppercase',
  },
});
console.log('test3');
const Button = ({ onClick, isDisabled, buttonName, colorClass }) => {
  const classes = useStyles();

  return (
    <button
      className={`${classes.button} ${colorClass}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonName}
    </button>
  );
};

export default React.memo(Button);
