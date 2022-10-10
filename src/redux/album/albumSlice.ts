import { createSlice } from '@reduxjs/toolkit';
import type { CurrentAlbum } from '../../types/Album';
import { getCurrentAlbumThunk } from './albumOperations';

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
  reducers: {
    addPhoto(state, { payload }) {
      state.photos = [...state.photos, { url: payload }];
    },
  },

  extraReducers: builder => {
    builder.addCase(getCurrentAlbumThunk.fulfilled, (state, { payload }) => {
      state.albumId = payload.albumId;
      state.name = payload.name;
      state.location = payload.location;
      state.date = payload.date;
      state.photos = payload.photos;
    });
  },
});

export const { addPhoto } = albumSlice.actions;
export default albumSlice.reducer;
