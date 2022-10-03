import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './container/Container';
import Header from './header/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const AlbumsPage = lazy(() => import('../pages/AlbumsPage'));
const AlbumPage = lazy(() => import('../pages/AlbumPage'));

const App: React.FC = () => {
  return (
    <Container>
      <Header />
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
          path="albums/:albumName"
          element={
            <PrivateRoute>
              <AlbumPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
