import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { AlbumContainerStyled } from './AlbumBar.styled';

const AlbumBar: React.FC = () => {
  return (
    <AlbumContainerStyled>
      <Link to="/albums" className="link">
        <AiOutlineLeft />
        Go back
      </Link>
    </AlbumContainerStyled>
  );
};

export default AlbumBar;
