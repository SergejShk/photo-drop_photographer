import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/home" />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default App;
