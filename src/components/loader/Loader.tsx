import React from 'react';
import loaderImg from '../../assets/Web-Loading.png';
import { ContainerLoader } from './LoaderContainer.styled';

const Loader: React.FC = () => {
  return (
    <ContainerLoader>
      <img className='img' src={loaderImg} alt="loader" />
    </ContainerLoader>
  );
};

export default Loader;
