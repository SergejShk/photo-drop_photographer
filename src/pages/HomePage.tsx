import React from 'react';
import AuthContainer from '../components/authContainer/AuthContainer';
import AuthForm from '../components/authForm/AuthForm';

const HomePage: React.FC = () => {
  return (
    <AuthContainer>
      <AuthForm />
    </AuthContainer>
  );
};

export default HomePage;
