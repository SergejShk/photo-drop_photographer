import React, { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getMustCurUser, isExistToken } from '../redux/auth/authSelectors';
import { getUserDataThunk } from '../redux/userData/userDataOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import SharedLoyaout from './sharedLoyaout/SharedLoyaout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AlbumsPage = lazy(() => import('../pages/AlbumsPage'));
const AlbumPage = lazy(() => import('../pages/AlbumPage'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMustCurUser = useAppSelector(getMustCurUser);
  const isLoggedIn = useAppSelector(isExistToken);

  useEffect(() => {
    isMustCurUser && dispatch(getUserDataThunk());
  }, [dispatch, isMustCurUser]);

  useEffect(() => {
    isLoggedIn && dispatch(getUserDataThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLoyaout />}>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="albums"
            element={
              <PrivateRoute>
                <AlbumsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="albums/:albumId"
            element={
              <PrivateRoute>
                <AlbumPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
