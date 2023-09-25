import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutProvider } from './context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
  </React.StrictMode>
);

// import { WorkoutsProvider } from './context/WorkoutContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WorkoutsProvider>
//       <App />
//     </WorkoutsProvider>
//   </React.StrictMode>
// );

// import { WorkoutsContextProvider } from './context/WorkoutContext'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WorkoutsContextProvider>
//       <App />
//     </WorkoutsContextProvider>
//   </React.StrictMode>
// );
