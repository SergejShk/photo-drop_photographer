import styled from 'styled-components';

export const Form = styled.form`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  min-width: 420px;
  height: 50px;
  padding: 15px;
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

export const Input = styled.input`
  width: calc(100% - 30px);
  height: 40px;
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.28;
  padding: 5px 14px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    outline: 1px solid #3300cc;
  }
`;

export const ErrorText = styled.p`
  color: transparent;
  margin-top: 15px;

  &.error {
    color: #e70e0e;
  }
`;
