import { createContext, useReducer } from 'react';

export const WorkoutContext = createContext(null);

export const WorkoutDispatchContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutContext.Provider value={state}>
      <WorkoutDispatchContext.Provider value={dispatch}>
        {children}
      </WorkoutDispatchContext.Provider>
    </WorkoutContext.Provider>
  );
}

function workoutsReducer(state, action) {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
        // dispatch: state.dispatch,
      };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
        // dispatch: state.dispatch,
      };
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
        // dispatch: state.dispatch,
      };
    default:
      return state;
  }
}

// import { createContext, useReducer } from 'react';

// export const WorkoutsContext = createContext();

// export const workoutsReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_WORKOUTS':
//       return {
//         workouts: action.payload,
//       };
//     case 'CREATE_WORKOUT':
//       return {
//         workouts: [action.payload, ...state.workouts],
//       };
//     case 'DELETE_WORKOUT':
//       return {
//         workouts: state.workouts.filter((w) => w._id !== action.payload._id),
//       };
//     default:
//       return state;
//   }
// };

// export const WorkoutsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(workoutsReducer, {
//     workouts: null,
//   });

//   return (
//     <WorkoutsContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </WorkoutsContext.Provider>
//   );
// };
