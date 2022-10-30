import { ThreeDots } from 'react-loader-spinner';
import { ContainerLoader } from './LoaderContainer.styled';

const Loader: React.FC = () => {
  return (
    <ContainerLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3300cc"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />

    </ContainerLoader>
  );
};

export default Loader;
