import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 * 
 * Hook that delays updating a value until after a specified delay
 * Useful for search inputs, API calls, and performance optimization
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if value changes before delay is reached
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * useDebounceCallback Hook
 * 
 * Hook that debounces a callback function
 * Returns a debounced version of the callback that delays invoking func
 */
export const useDebounceCallback = (callback, delay, dependencies = []) => {
  const [debounceTimer, setDebounceTimer] = useState(null);

  const debouncedCallback = (...args) => {
    // Clear existing timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set new timer
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(newTimer);
  };

  // Clean up timer on unmount or dependency change
  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, dependencies);

  return debouncedCallback;
};

export default useDebounce;
