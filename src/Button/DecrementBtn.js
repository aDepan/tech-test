import React from 'react';

import Button from './Button';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  white: {
    backgroundColor: 'white',
    border: 'black 2px solid',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
    '&:disabled': {
      cursor: 'none',
      backgroundColor: '#ccc',
      border: '#ccc 2px solid',
      color: 'black',
    },
  },
});

const IncrementBtn = ({ isDisabled, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      colorClass={classes.white}
      buttonName='- decrement'
      onClick={onClick}
      isDisabled={isDisabled}
    />
  );
};

export default React.memo(IncrementBtn);
