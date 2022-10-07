import React from 'react';
import { Oval } from 'react-loader-spinner';
import { ContainerLoader } from './LoaderContainer.styled';

const Loader: React.FC = () => {
  return (
    <ContainerLoader>
      <Oval
        height={50}
        width={50}
        color="#3300cc"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#856ec7"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </ContainerLoader>
  );
};

export default Loader;
