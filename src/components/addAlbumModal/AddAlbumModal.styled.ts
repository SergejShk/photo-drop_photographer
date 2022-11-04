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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  min-height: 100%;
  padding: 15px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);

  @media screen and (min-width: 795px) {
    min-height: 330px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

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
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  padding: 5px 14px;
  margin-bottom: 15px;

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
