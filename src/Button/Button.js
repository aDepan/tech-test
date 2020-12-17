import React from 'react';

import { createUseStyles, createTheming } from 'react-jss';

const ThemeContext = React.createContext({});
const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

const blackHover = {
  backgroundColor: 'black',
  color: 'white',
};

const pinkHover = {
  backgroundColor: 'rebeccapurple',
  border: 'rebeccapurple 1px solid',
};

const useStyles = createUseStyles({
  button: props => ({
    padding: '15px 30px',
    borderRadius: '35px',
    outline: 'none',
    backgroundColor: props.btnColor,
    '&hover': props.btnColor === 'white' ? blackHover : pinkHover,
  }),

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
  mathSymbolClass: {
    fontSize: '18px',
    marginRight: '5px',
  },
});

const Button = props => {
  const classes = useStyles(props);
  let colorClass = '';
  colorClass =
    props.btnColor === 'white'
      ? `${classes.button} ${classes.white}`
      : `${classes.button} ${classes.pink}`;

  let mathSym = props.name === 'DECREMENT' ? '-' : '+';

  return (
    <button
      className={colorClass}
      onClick={props.clicked}
      disabled={props.btnDisabled}
    >
      <span className={classes.mathSymbolClass}>{mathSym}</span>
      {props.name}
    </button>
  );
};

export default Button;
