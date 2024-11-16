import { useState, useCallback } from 'react';
import { ErrorWithMessage } from '../types';
import { handleError } from '../utils/error-handler';

export const useAsyncAction = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorWithMessage | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction();
      setData(result);
      return { data: result, error: null };
    } catch (err) {
      const error = handleError(err);
      setError(error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    execute,
    loading,
    error,
    data,
    reset: useCallback(() => {
      setData(null);
      setError(null);
      setLoading(false);
    }, [])
  };
};