import React, { useEffect, Suspense } from 'react';
import Header from '../header/Header';
import Container from '../container/Container';
import Loader from '../loader/Loader';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { isExistToken, isLoadingStore } from '../../redux/auth/authSelectors';

const SharedLoyaout: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingStore);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      isLoggedIn ? navigate('albums') : navigate('auth');
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default SharedLoyaout;
