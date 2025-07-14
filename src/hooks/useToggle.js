import { useState, useCallback } from 'react';

/**
 * useToggle Hook
 * 
 * Hook for managing boolean state with toggle functionality
 * Provides convenient methods for toggling, setting true, and setting false
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, { toggle, setTrue, setFalse, reset }];
};

export default useToggle;
