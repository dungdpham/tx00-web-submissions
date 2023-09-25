import {
  WorkoutContext,
  WorkoutDispatchContext,
} from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error('useWorkoutContext must be used inside a WorkoutProvider');
  }

  return context;
};

export const useWorkoutDispatchContext = () => {
  const context = useContext(WorkoutDispatchContext);

  if (!context) {
    throw Error(
      'useWorkoutsDispatchContext must be used inside a WorkoutProvider'
    );
  }

  return context;
};

// import { WorkoutsContext } from '../context/WorkoutContext';
// import { useContext } from 'react';

// export const useWorkoutsContext = () => {
//   const context = useContext(WorkoutsContext);

//   if (!context) {
//     throw Error(
//       'useWorkoutsContext must be used inside an WorkoutsContextProvider'
//     );
//   }

//   return context;
// };
