import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStayled = styled(Form)`
  max-width: 345px;
  display: flex;
  flex-direction: column;
  margin: 136px auto 0;
`;

export const Wrapper = styled.div`
  min-height: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.accent};
  border-radius: 50px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  padding: 14px 20px 13px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHover};
  }
`;

export const Input = styled(Field)`
  width: calc(100% - 30px);
  height: 30px;
  background-color: #f4f4f4;
  color: ${p => p.theme.colors.primary};
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  padding: 5px 14px;

  &:hover,
  &:focus {
    outline: 1px solid #3300cc;
  }
`;

export const ErrorText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.errorColor};
  text-align: center;
`;
