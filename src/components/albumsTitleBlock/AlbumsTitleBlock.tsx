import React, { useState } from 'react';
import AddAlbumModal from '../addAlbumModal/AddAlbumModal';
import sprite from '../../assets/sprite.svg';
import { ContainerStyled } from './AlbumsTitleBlock.styled';

const AlbumsTitleBlock: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModal(true);
  };

  const closeModal = (): void => {
    setIsModal(false);
  };

  return (
    <>
      <ContainerStyled>
        <h2 className="title">All albums</h2>
        <button className="btn" onClick={handleClick}>
          <svg className="icon">
            <use href={sprite + '#icon-plus'} />
          </svg>
        </button>
        {isModal && <AddAlbumModal closeModal={closeModal} />}
      </ContainerStyled>
    </>
  );
};

export default AlbumsTitleBlock;
