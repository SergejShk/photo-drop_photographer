import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAlbum } from '../../redux/album/albumSelectors';
import { getCurrentAlbumThunk } from '../../redux/album/albumOperations';
import { getAllAlbums } from '../../redux/userData/userDataSelectors';
import { TextInfo } from './AlbumInfo.styled';

const AlbumInfo: React.FC = () => {
  const params = useParams();
  const albums = useAppSelector(getAllAlbums);
  const { albumId, name, location, date, photos } = useAppSelector(getAlbum);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.albumId && params.albumId !== albumId) {
      dispatch(getCurrentAlbumThunk(params.albumId));
    }
  }, [albumId, photos, dispatch, params.albumId, albums]);

  return (
    <>
      <TextInfo>
        <b>Name: </b>
        {name}
      </TextInfo>
      <TextInfo>
        <b>Location: </b>
        {location}
      </TextInfo>
      <TextInfo>
        <b>Date: </b>
        {moment(date).format('YYYY-MM-DD')}
      </TextInfo>
      <TextInfo>
        <b>Total photos: </b>
        {photos.length}
      </TextInfo>
    </>
  );
};

export default AlbumInfo;
