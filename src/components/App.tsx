import React, { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getUserDataThunk } from '../redux/userData/userDataOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SharedLoyaout from './sharedLoyaout/SharedLoyaout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AlbumsPage = lazy(() => import('../pages/AlbumsPage'));
const AlbumPage = lazy(() => import('../pages/AlbumPage'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state: any) => state.auth.accessToken);

  useEffect(() => {
    isLoggedIn && dispatch(getUserDataThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <SharedLoyaout />
      <Routes>
        <Route
          path="/"
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
