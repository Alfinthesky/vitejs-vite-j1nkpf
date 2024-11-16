export type ErrorWithMessage = {
  message: string;
  code?: string;
  details?: unknown;
};

export type ApiResponse<T> = {
  data: T;
  error: null;
} | {
  data: null;
  error: ErrorWithMessage;
};