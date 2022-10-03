import axios from 'axios';
import { saveToken } from './authApi';
import type { NewAlbum } from '../types/Album';

export const getUserDataApi = async (persistedToken: string) => {
  saveToken.set(persistedToken);
  const { data } = await axios.get('/albums');

  return data.data;
};

export const addAlbum = async (newAlbum: NewAlbum) => {
  const { data } = await axios.post('/albums', newAlbum);

  return data;
};
