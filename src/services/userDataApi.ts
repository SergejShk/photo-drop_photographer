import { PhotosWithNumbers } from './../types/Photo';
import axios from 'axios';

import { saveToken } from './authApi';
import type { NewAlbum } from '../types/Album';

export type { PhotosWithNumbers } from '../types/Photo';

export const getUserDataApi = async (persistedToken: string) => {
  saveToken.set(persistedToken);
  const { data } = await axios.get('/albums');

  return data.data;
};

export const addAlbum = async (newAlbum: NewAlbum) => {
  const { data } = await axios.post('/albums', newAlbum);

  return data.data;
};

export const getAlbumData = async (albumId: string) => {
  const { data } = await axios.get(`/albums/${albumId}`);
  console.log(data.data);
  return data.data;
};

export const savePhotosWithNumbers = async (dataToSend: PhotosWithNumbers) => {
  await axios.post('/saveNumbers', dataToSend);
};
