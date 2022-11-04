import { createSlice } from '@reduxjs/toolkit';
import { getUserDataThunk } from './userDataOperations';
import type { AlbumsStore } from '../../types/Album';
import { addNewAlbumThunk } from '../album/albumOperations';
import { logInThunk } from '../auth/authOperations';

const initialState: AlbumsStore = {
  albums: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.albums = payload.albums;
      })
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.albums = payload;
      })
      .addCase(addNewAlbumThunk.fulfilled, (state, { payload }) => {
        state.albums = [...(state.albums as any), payload];
      });
  },
});

export default userDataSlice.reducer;
