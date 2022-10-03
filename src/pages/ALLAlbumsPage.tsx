import React from 'react';
import AlbumsList from '../components/albumsList/AlbumsList';
import AlbumsTitleBlock from '../components/albumsTitleBlock/AlbumsTitleBlock';

const AllAlbumsPage: React.FC = () => {
  return (
    <section>
      <AlbumsTitleBlock />
      <AlbumsList />
    </section>
  );
};

export default AllAlbumsPage;
