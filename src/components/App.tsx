import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './header/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const AlbumPage = lazy(() => import('../pages/AlbumPage'));

const App: React.FC = () => {
  return (
    <>
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
