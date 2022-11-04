import { Albums } from './Album';

export type Credentials = {
  email: string;
  password: string;
};

export type AuthStore = {
  accessToken: string;
  isRegistered: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};

export type AuthType = {
  token: string;
  albums: Albums;
};

export type AuthFormType = {
  email: string;
  password: string;
};
