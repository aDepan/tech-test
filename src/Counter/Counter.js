import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    margin: '0 20px',
  },
});

const Counter = props => {
  const classes = useStyles();

  return <p className={classes.counter}>Counter: {props.value}</p>;
};

export default React.memo(Counter);
