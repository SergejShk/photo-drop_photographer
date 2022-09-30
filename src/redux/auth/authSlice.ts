import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logInThunk } from './authOperations';

type Auth = {
  accessToken: string;

  isRegistered: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: Auth = {
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
