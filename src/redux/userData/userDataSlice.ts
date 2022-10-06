import { createSlice } from '@reduxjs/toolkit';
import { getUserDataThunk } from './userDataOperations';
import type { Albums } from '../../types/Album';
import { addNewAlbumThunk } from '../album/albumOperations';

const initialState: Albums = {
  albums: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.albums = payload as any;
      })
      .addCase(addNewAlbumThunk.fulfilled, (state, { payload }) => {
        state.albums = [...state.albums, payload as any];
      });
  },
});

export default userDataSlice.reducer;
