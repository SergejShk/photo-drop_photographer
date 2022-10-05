import { createAsyncThunk } from '@reduxjs/toolkit';
import { addAlbum } from './../../services/userDataApi';
import type { NewAlbum, CurrentAlbum } from '../../types/Album';

export const addNewAlbumThunk = createAsyncThunk<
  CurrentAlbum,
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
