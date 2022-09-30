import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AlbumPage from '../pages/AlbumPage';
import HomePage from '../pages/HomePage';
import Header from './header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="albums" element={<AlbumPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
