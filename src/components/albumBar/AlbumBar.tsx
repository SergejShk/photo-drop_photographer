import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumContainerStyled } from './AlbumBar.styled';
import sprite from '../../assets/sprite.svg';

const AlbumBar: React.FC = () => {
  return (
    <AlbumContainerStyled>
      <Link to="/albums" className='link'>
        <svg className="icon">
          <use href={sprite + '#icon-Back-Arrow'} />
        </svg>{' '}
        Go back
      </Link>
      <button type="submit" className="btn">
        Upload photo
      </button>
    </AlbumContainerStyled>
  );
};

export default AlbumBar;
