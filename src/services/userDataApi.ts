import axios from 'axios';
import { saveToken } from './authApi';

export const getUserDataApi = async (persistedToken: string) => {
  saveToken.set(persistedToken);
  const { data } = await axios.get('/albums');

  return data;
};
