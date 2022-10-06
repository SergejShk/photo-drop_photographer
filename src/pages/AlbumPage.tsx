import React from 'react';
import AlbumBar from '../components/albumBar/AlbumBar';
import InputLoadFiles from '../components/inputLoadFiles/InputLoadFiles';

const AlbumPage: React.FC = () => {
  return (
    <>
      <AlbumBar />
      <InputLoadFiles />
    </>
  );
};

export default AlbumPage;
