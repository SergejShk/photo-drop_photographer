import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector((state: any) => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<p>Loading</p>}>
      {isLoggedIn ? <Navigate to="/albums" /> : children}
    </Suspense>
  );
};

export default PublicRoute;
