import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumBar from '../components/albumBar/AlbumBar';
import AlbumInfo from '../components/albumInfo/AlbumInfo';
import LoadFiles from '../components/loadFiles/LoadFiles';
import { useAppSelector } from '../hooks/reduxHooks';
import { isErrorState } from '../redux/auth/authSelectors';

const AlbumPage: React.FC = () => {
  const isErrorStore = useAppSelector(isErrorState);
  const navigate = useNavigate();

  useEffect(() => {
    isErrorStore && navigate('albums');
  }, [isErrorStore, navigate]);

  return (
    <>
      <AlbumBar />
      <AlbumInfo />
      <LoadFiles />
    </>
  );
};

export default AlbumPage;
