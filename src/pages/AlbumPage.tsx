import React from 'react';
import AlbumBar from '../components/albumBar/AlbumBar';
import LoadFiles from '../components/loadFiles/LoadFiles';

const AlbumPage: React.FC = () => {
  return (
    <>
      <AlbumBar />
      <LoadFiles />
    </>
  );
};

export default AlbumPage;
