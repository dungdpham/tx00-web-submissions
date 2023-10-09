import React from 'react';
import { useCounter } from './useCounter';
import './SingleCounter.css';

const SingleCounter = () => {
  const { counter, increment, decrement, reset } = useCounter(99);

  return (
    <div className="single-counter">
      <h2>Counter:</h2>
      <div className="counter-value">{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SingleCounter;
