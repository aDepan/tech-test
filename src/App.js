import React, { useState, useCallback } from 'react';

import IncrementBtn from './Button/IncrementBtn';
import DecrementBtn from './Button/DecrementBtn';
import Counter from './Counter/Counter';

import ProjectInfo from './ProjectInfo/ProjectInfo.js';

import { createUseStyles } from 'react-jss';

const PROJECTS = [
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
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const [currentValue, setValue] = useState(0);

  const classes = useStyles();

  const decrementHandler = useCallback(() => {
    setValue(val => val - 1);
  }, []);

  const incrementHandler = useCallback(() => {
    setValue(val => val + 1);
  }, []);

  const isDisabledDec = currentValue <= 0;
  const isDisabledInc = currentValue >= PROJECTS.length - 1;

  return (
    <div>
      <div className={classes.app}>
        <DecrementBtn onClick={decrementHandler} isDisabled={isDisabledDec} />
        <Counter value={currentValue} />
        <IncrementBtn onClick={incrementHandler} isDisabled={isDisabledInc} />
      </div>
      <ProjectInfo projectName={PROJECTS[currentValue]} />
    </div>
  );
};

export default React.memo(App);
