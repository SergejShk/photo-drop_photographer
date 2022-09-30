import React from 'react';
import { AuthContainerStyled } from './AuthContainer.styled';

interface IProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<IProps> = ({ children }) => {
  return <AuthContainerStyled>{children}</AuthContainerStyled>;
};

export default AuthContainer;
