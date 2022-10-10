import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getAllAlbums } from '../../redux/userData/userDataSelectors';
import Loader from '../loader/Loader';
import { List, Item } from './AlbumList.styled';
import sprite from '../../assets/sprite.svg';
import { isLoadingStore } from '../../redux/auth/authSelectors';

import type { Album } from '../../types/Album';

const AlbumsList: React.FC = () => {
  const albums = useAppSelector(getAllAlbums);
  const isLoading = useAppSelector(isLoadingStore);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {albums.map((album: Album) => {
            const { albumId, name, location, date } = album;

            return (
              <Item className="item" key={album.albumId}>
                <Link className="link" to={`/albums/${albumId}`}>
                  <svg className="icon">
                    <use href={sprite + '#icon-images'} />
                  </svg>
                  <div>
                    <p>
                      <b>Name: </b>
                      {name}
                    </p>
                    <p>
                      <b>Location: </b>
                      {location}
                    </p>
                    <p>
                      <b>Date: </b>
                      {moment(date).format('YYYY-MM-DD')}
                    </p>
                  </div>
                </Link>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default AlbumsList;
