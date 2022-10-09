import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

import Loader from './loader/Loader';

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector((state: any) => state.auth.accessToken);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Suspense>
  );
};

export default PrivateRoute;
