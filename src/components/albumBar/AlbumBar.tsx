import React from 'react';
import { Link } from 'react-router-dom';
// import { getAlbumData } from '../../services/userDataApi';
import { AlbumContainerStyled } from './AlbumBar.styled';
import sprite from '../../assets/sprite.svg';

const AlbumBar: React.FC = () => {
  // const params = useParams();

  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();

  //   params.albumId && getAlbumData(params.albumId);
  // };

  return (
    <AlbumContainerStyled>
      <Link to="/albums" className="link">
        <svg className="icon">
          <use href={sprite + '#icon-Back-Arrow'} />
        </svg>{' '}
        Go back
      </Link>
      {/* <button type="submit" className="btn" onClick={handleClick}>
        Get photo
      </button> */}
    </AlbumContainerStyled>
  );
};

export default AlbumBar;
