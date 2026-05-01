export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: string;
}

export interface ApiError {
  status: number;
  message: string;
  code: string;
}
