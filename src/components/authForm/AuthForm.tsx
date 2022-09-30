import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { logInThunk } from '../../redux/auth/authOperations';
import { FormAuthStyled } from './AuthForm.styled';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(logInThunk({ email, password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormAuthStyled onSubmit={handleSubmit}>
      <input
        className="authForm__input"
        type="text"
        name="email"
        value={email}
        placeholder="example@mail.com"
        onChange={handleChange}
      />

      <input
        className="authForm__input"
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={handleChange}
      />

      <button type="submit" className="authForm__btn">
        Sign in
      </button>
    </FormAuthStyled>
  );
};

export default AuthForm;
