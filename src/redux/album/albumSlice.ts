import { createSlice } from '@reduxjs/toolkit';
import type { CurrentAlbum } from '../../types/Album';
import { addPhotoThunk, getCurrentAlbumThunk } from './albumOperations';

const initialState: CurrentAlbum = {
  albumId: '',
  name: '',
  location: '',
  date: '',
  photos: [],
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getCurrentAlbumThunk.fulfilled, (state, { payload }) => {
        state.albumId = payload.albumId;
        state.name = payload.name;
        state.location = payload.location;
        state.date = payload.date;
        state.photos = payload.photos;
      })
      .addCase(addPhotoThunk.fulfilled, (state, { payload }) => {
        state.photos = [...state.photos, { url: payload }];
      });
  },
});

export default albumSlice.reducer;
