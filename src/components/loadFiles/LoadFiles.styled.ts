import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const TextInfo = styled.p`
  font-size: 18px;
  line-height: 1.27;
  font-weight: 600;
  color: transparent;
  margin-bottom: 15px;

  &.active {
    color: #3300cc;
  }
`;

export const InputPhone = styled.input`
  width: calc(100% - 30px);
  height: 40px;
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.28;
  padding: 5px 15px;
  margin-bottom: 15px;

  &:hover,
  &:focus {
    outline: 1px solid #3300cc;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  height: 50px;
  padding: 0 16px;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #24028b;
  }
`;

export const LabelLoadFiles = styled.label`
  width: calc(100% / 3 - 28px);
  height: 50px;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #24028b;
  }

  & .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
