import './app.css';

import { useState } from 'react';
import { useReducer } from 'react';

// useState
function StateCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="Counter">
      <h1>Counter useState</h1>
      Count: {count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

// useReducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Counter">
      <h1>Counter userReducer</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export { StateCounter, ReducerCounter };
