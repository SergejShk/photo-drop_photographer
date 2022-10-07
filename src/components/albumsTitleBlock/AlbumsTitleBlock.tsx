import React, { useState } from 'react';
import AddAlbumModal from '../addAlbumModal/AddAlbumModal';
import { BiAddToQueue } from 'react-icons/bi';
import { ContainerStyled, Button, Title } from './AlbumsTitleBlock.styled';

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
        <Title>All albums</Title>
        <Button onClick={handleClick}>
          <BiAddToQueue size={24} />
        </Button>
        {isModal && <AddAlbumModal closeModal={closeModal} />}
      </ContainerStyled>
    </>
  );
};

export default AlbumsTitleBlock;
