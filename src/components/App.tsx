import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/home" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
