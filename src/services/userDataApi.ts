import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';

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

export const getAlbumData = async (albumId: string) => {
  const { data } = await axios.get(`/albums/${albumId}`);

  return data.data;
};

const uppy = new Uppy({
  debug: true,
  id: 'AwsS3',
});

export const addPhotos = async (albumId: string) => {
  let photos: any = [];

  uppy.use(AwsS3, {
    async getUploadParameters(file): Promise<any> {
      try {
        console.log(file);
        const { data } = await axios.post(`/upload/${albumId}`, {
          extension: file.name.split('.').reverse()[0],
        });
        photos.push(data.key);

        return {
          method: data.method,
          url: data.url,
          fields: data.fields,
          headers: {
            'Content-Type': file.type,
          },
        };
      } catch (error) {
        console.log(error);
      }
    },
  });
};
