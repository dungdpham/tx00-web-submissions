import { useState, useEffect } from 'react';

export default function useLocalStorage(keyName, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(keyName)) || initialValue
  );

  const handleValueChange = (updatedValue) => {
    localStorage.setItem(keyName, JSON.stringify(updatedValue));
    setValue(updatedValue);
  };

  return [value, handleValueChange];
}
