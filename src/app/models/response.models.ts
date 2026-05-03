export interface Response<T> {
  data: T;
  error?: string;
}

export interface ResponseArray<T> {
  data: T[];
  error?: string;
}
export interface UserLoginResponse {
  token: string;
  userId: number;
  email: string;
  accessToken?: string;
}

export interface UserRegisterResponse {
  userId: number;
  email: string;
  createdAt: string;
  accessToken?: string; // ISO дата
}
