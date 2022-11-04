import {
  addPhotoThunk,
  getCurrentAlbumThunk,
} from './../album/albumOperations';
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserDataThunk } from './../userData/userDataOperations';
import { logInThunk } from './authOperations';
import { addNewAlbumThunk } from '../album/albumOperations';
import { AuthStore } from '../../types/authTypes';

const initialState: AuthStore = {
  accessToken: '',
  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(logInThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserDataThunk.fulfilled, state => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserDataThunk.rejected, state => {
        state.accessToken = '';
      })
      .addCase(addNewAlbumThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewAlbumThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentAlbumThunk.fulfilled, (state, { payload }) => {
        state.error = null;
      })
      .addCase(addPhotoThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addPhotoThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
