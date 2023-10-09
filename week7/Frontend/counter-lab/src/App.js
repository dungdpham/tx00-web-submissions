// import { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>plus</button>
//       <button onClick={() => setCounter(counter - 1)}>minus</button>
//       <button onClick={() => setCounter(0)}>zero</button>
//     </div>
//   );
// };

import React from 'react';
import SingleCounter from './SingleCounter';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App;
