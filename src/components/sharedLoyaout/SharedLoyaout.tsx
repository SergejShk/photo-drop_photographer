import React, { Suspense } from 'react';
import Header from '../header/Header';
import Container from '../container/Container';
import Loader from '../loader/Loader';
import { Outlet } from 'react-router-dom';

const SharedLoyaout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLoyaout;
