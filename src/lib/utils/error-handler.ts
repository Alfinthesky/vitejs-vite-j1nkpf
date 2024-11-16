import { ErrorWithMessage } from '../types';

export const handleError = (error: unknown): ErrorWithMessage => {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR'
    };
  }

  if (typeof error === 'string') {
    return {
      message: error,
      code: 'UNKNOWN_ERROR'
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    details: error
  };
};