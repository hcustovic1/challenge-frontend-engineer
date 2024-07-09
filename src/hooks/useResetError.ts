import { useCallback } from 'react';

export const useResetError = (setError: (error: string | null) => void) => {
  return useCallback(() => {
    setError(null);
  }, [setError]);
};
