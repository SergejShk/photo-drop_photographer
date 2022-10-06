import { createSlice } from '@reduxjs/toolkit';
import type { CurrentAlbum } from '../../types/Album';
import { addNewAlbumThunk } from './albumOperations';

const initialState: CurrentAlbum = {
  albumId: '',
  name: '',
  userId: null,
  location: '',
  date: '',
  path: '',
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(addNewAlbumThunk.fulfilled, (state, { payload }) => {
      state.albumId = payload.albumId;
      state.name = payload.name;
      state.userId = payload.userId;
      state.location = payload.location;
      state.date = payload.date;
      state.path = payload.path;
    });
  },
});

export default albumSlice.reducer;
