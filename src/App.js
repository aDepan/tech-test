import React, { useState } from 'react';

import Button from './Button/Button.js';
import Counter from './Counter/Counter.js';

import ProjectInfo from './ProjectInfo/ProjectInfo.js';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  let [currentValue, setValue] = useState(0);
  let [isDisabledDec, setIsDisabledDec] = useState('disabled');
  let [isDisabledInc, setIsDisabledInc] = useState('');

  const classes = useStyles();

  const decrementHandler = () => {
    setValue(--currentValue);
    if (currentValue <= 0) {
      setIsDisabledDec('disabled');
    }
    if (currentValue < 7) {
      setIsDisabledInc('');
    }
  };

  const incrementHandler = () => {
    setValue(++currentValue);
    if (currentValue > 0) {
      setIsDisabledDec('');
    }

    if (currentValue >= 7) {
      setIsDisabledInc('disabled');
    }
  };
  return (
    <div>
      <div className={classes.app}>
        <Button
          name='DECREMENT'
          btnColor='white'
          clicked={decrementHandler}
          btnDisabled={isDisabledDec}
        />
        <Counter value={currentValue} />
        <Button
          name='INCREMENT'
          btnColor='hotpink'
          clicked={incrementHandler}
          btnDisabled={isDisabledInc}
        />
      </div>
      <ProjectInfo prjId={currentValue} />
    </div>
  );
};

export default App;
