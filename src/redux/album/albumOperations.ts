import { createAsyncThunk } from '@reduxjs/toolkit';
import { addAlbum, getAlbumData } from './../../services/userDataApi';
import type {
  NewAlbum,
  UpdatedNewAlbum,
  CurrentAlbum,
} from '../../types/Album';
import { RootState } from '../store';

export const addNewAlbumThunk = createAsyncThunk<
  UpdatedNewAlbum,
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

export const getCurrentAlbumThunk = createAsyncThunk<
  CurrentAlbum,
  string,
  { rejectValue: string }
>('album/getAlbum', async (albumId, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const persistedToken = state.auth.accessToken;

  if (!persistedToken) {
    throw new Error('Not authorized');
  }

  try {
    return await getAlbumData(albumId);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addPhotoThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('album/addPhoto', photo => photo);
