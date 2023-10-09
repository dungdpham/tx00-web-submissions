import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password, password2) => {
    setIsLoading(true);
    setError(null);

    if (password !== password2) {
      setIsLoading(false);
      setError('Passwords do not match');
      return;
    }

    const response = await fetch('api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //localStorage.setItem('user', JSON.stringify(json));
      sessionStorage.setItem('user', JSON.stringify(json));

      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
