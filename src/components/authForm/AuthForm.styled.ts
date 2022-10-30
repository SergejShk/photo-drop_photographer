import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStayled = styled(Form)`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  min-height: 80px;
  width: 100%;
`;

export const Button = styled.button`
  min-width: 420px;
  height: 50px;
  padding: 15px;
  font-family: 'futura-pt, sans-serif';
  font-size: 22px;
  line-height: 1.27;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #3300cc;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 0.98;
  }
`;

export const Input = styled(Field)`
  width: calc(100% - 30px);
  height: 40px;
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-family: 'futura-pt, sans-serif';
  font-size: 18px;
  line-height: 1.28;
  padding: 5px 14px;

  &:hover,
  &:focus {
    outline: 1px solid #3300cc;
  }
`;

export const ErrorText = styled.p`
  font-family: 'futura-pt, sans-serif';
  color: #e70e0e;
`;
