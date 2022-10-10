import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { logInThunk } from '../../redux/auth/authOperations';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { authSchema } from '../../utils/validate/authShema';
import { isErrorState } from '../../redux/auth/authSelectors';
import { Button, ErrorText, FormStayled, Input } from './AuthForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const AuthForm: React.FC = () => {
  const [isError, setIsError] = useState<string>('');

  const isErrorStore = useAppSelector(isErrorState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsError(isErrorStore);
  }, [isErrorStore]);

  const handleSubmit = (values: any) => {
    dispatch(logInThunk(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={authSchema}
        onSubmit={handleSubmit}
      >
        <FormStayled>
          <Input type="text" name="email" placeholder="example@mail.com" />
          <ErrorMessage name="email">
            {msg => <ErrorText>{msg}</ErrorText>}
          </ErrorMessage>

          <Input type="password" name="password" placeholder="password" />
          <ErrorMessage name="password">
            {msg => <ErrorText>{msg}</ErrorText>}
          </ErrorMessage>

          <Button type="submit">Sign in</Button>
        </FormStayled>
      </Formik>
      {isError && <ErrorText>Email or password is wrong</ErrorText>}
    </>
  );
};

export default AuthForm;
