import styled from 'styled-components';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 30;
`;

export const Modal = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 380px;
  padding: 15px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 10px;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  padding: 5px;
  margin-left: auto;
  margin-bottom: 10px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #24028b;
    outline: 1px solid #3300cc;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
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

    &.date:hover,
    &.date:focus {
      cursor: pointer;
    }
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 22px;
  line-height: 1.27;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #3300cc;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #24028b;
  }
`;
