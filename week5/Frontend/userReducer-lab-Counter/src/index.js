import React from 'react';
import ReactDOM from 'react-dom/client';

import { StateCounter, ReducerCounter } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateCounter />
    <ReducerCounter />
  </React.StrictMode>
);
