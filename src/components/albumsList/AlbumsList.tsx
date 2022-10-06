import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getAllAlbums } from '../../redux/userData/userDataSelectors';
import Loader from '../loader/Loader';
import { AlbumListStyled } from './AlbumList.styled';
import sprite from '../../assets/sprite.svg';

const AlbumsList: React.FC = () => {
  const albums = useAppSelector(getAllAlbums);
  const isLoading = useAppSelector((state: any) => state.auth.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AlbumListStyled>
          {albums.map((album: any) => {
            return (
              <li className="item" key={album.albumId}>
                <Link className="link" to={`/albums/${album.albumId}`}>
                  <svg className="icon">
                    <use href={sprite + '#icon-images'} />
                  </svg>
                  <div>
                    <p>
                      <span className="title-text">Name:</span> {album.name}
                    </p>
                    <p>
                      <span className="title-text">Location:</span>{' '}
                      {album.location}
                    </p>
                    <p>
                      <span className="title-text">Date:</span>{' '}
                      {moment(album.date).format('YYYY-MM-DD')}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </AlbumListStyled>
      )}
    </>
  );
};

export default AlbumsList;
