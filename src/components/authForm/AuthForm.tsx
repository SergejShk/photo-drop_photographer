import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logInThunk } from '../../redux/auth/authOperations';
import { Form, ErrorText, Input, Button } from './AuthForm.styled';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<string>('');

  const isErrorStore = useAppSelector((state: any) => state.auth.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsError(isErrorStore);
  }, [isErrorStore]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIsError('');
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(logInThunk({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="email"
        value={email}
        placeholder="example@mail.com"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={handleChange}
      />
      <Button type="submit">Sign in</Button>
      <ErrorText className={isError ? 'error' : ''}>
        Email or password is wrong
      </ErrorText>
    </Form>
  );
};

export default AuthForm;
