import { RootState } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addAlbum, getUserDataApi } from './../../services/userDataApi';
import type { Albums, NewAlbum } from '../../types/Album';

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

export const addNewAlbumThunk = createAsyncThunk<
  string,
  NewAlbum,
  { rejectValue: string }
>('albums/addAlbum', async (newAlbum, { rejectWithValue }) => {
  try {
    const res = await addAlbum(newAlbum);

    return res;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
