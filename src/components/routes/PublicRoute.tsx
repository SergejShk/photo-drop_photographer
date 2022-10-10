import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { isExistToken } from '../../redux/auth/authSelectors';
import Loader from '../loader/Loader';

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? <Navigate to="/albums" /> : children}
    </Suspense>
  );
};

export default PublicRoute;
