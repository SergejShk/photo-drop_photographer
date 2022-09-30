import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInApi } from '../../services/authApi';

type Credentials = {
  email: string;
  password: string;
};

type Token = {
  token: string;
};

export const logInThunk = createAsyncThunk<
  Token,
  Credentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const data = await logInApi(credentials);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
