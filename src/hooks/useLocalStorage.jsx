import { useState, useEffect } from 'react';

/**
 * Custom hook to sync state with Local Storage.
 * @param {string} key - The key for local storage.
 * @param {*} initialValue - The initial value of the state.
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  const [value, setValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;