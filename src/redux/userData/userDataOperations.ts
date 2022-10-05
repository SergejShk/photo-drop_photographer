import { RootState } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataApi } from './../../services/userDataApi';
import type { Albums } from '../../types/Album';

export const getUserDataThunk = createAsyncThunk<
  Albums,
  undefined,
  { rejectValue: string }
>('auth/getData', async (_, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const persistedToken = state.auth.accessToken;

  if (!persistedToken) {
    throw new Error('Not authorized');
  }

  try {
    const data = await getUserDataApi(persistedToken);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
