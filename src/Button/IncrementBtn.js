import React from 'react';

import Button from './Button';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pink: {
    backgroundColor: 'hotpink',
    border: 'hotpink 1px solid',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rebeccapurple',
      border: 'rebeccapurple 1px solid',
    },
    '&:disabled': {
      cursor: 'none',
      backgroundColor: '#ccc',
      border: '#ccc 2px solid',
    },
  },
});

const IncrementBtn = ({ isDisabled, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      colorClass={classes.pink}
      buttonName='+ increment'
      onClick={onClick}
      isDisabled={isDisabled}
    />
  );
};

export default React.memo(IncrementBtn);
