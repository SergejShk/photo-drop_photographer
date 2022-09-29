import { createSlice } from '@reduxjs/toolkit';

interface Auth {
  accessToken: string;
  refreshToken: string;
  sid: string;

  isRegistered: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: Auth = {
  accessToken: '',
  refreshToken: '',
  sid: '',

  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
