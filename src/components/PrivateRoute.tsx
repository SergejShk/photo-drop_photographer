import React, { Suspense, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getUserDataThunk } from '../redux/userData/userDataOperations';
import Loader from './loader/Loader';

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(getUserDataThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? children : <Navigate to="/" />}
    </Suspense>
  );
};

export default PrivateRoute;
