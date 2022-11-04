import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInApi } from '../../services/authApi';
import { getUserDataApi } from '../../services/userDataApi';
import { AuthType, Credentials } from '../../types/authTypes';

export const logInThunk = createAsyncThunk<
  AuthType,
  Credentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const dataLogIn = await logInApi(credentials);
    const albums = await getUserDataApi(dataLogIn.token);

    return { ...dataLogIn, albums };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
