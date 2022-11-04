import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { HeaderStyled } from './Header.styled';
import sprite from '../../assets/sprite.svg';

const Header: React.FC = () => {
  const { albumId } = useParams();

  return (
    <HeaderStyled>
      {albumId && (
        <Link to="/albums" className="goBack">
          <AiOutlineLeft />
        </Link>
      )}
      <svg className="logo">
        <use href={sprite + '#icon-Logo'} />
      </svg>
    </HeaderStyled>
  );
};

export default Header;
