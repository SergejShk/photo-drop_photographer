import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector((state: any) => state.auth.isLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
