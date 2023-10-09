import { useAuthContext } from './useAuthContext';
import { useGoalsContext } from './useGoalsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchGoals } = useGoalsContext();

  const logout = () => {
    //localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
    dispatchGoals({ type: 'SET_GOALS', payload: null });
  };

  return { logout };
};
