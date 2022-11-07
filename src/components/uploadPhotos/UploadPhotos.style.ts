import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  position: relative;
  /* width: calc(345px - 60px); */
  width: 345px;

  & .react-tel-input .form-control {
    width: 100%;
  }

  @media screen and (min-width: 795px) {
    width: 345px;
  }
`;

export const BtnRemoveInput = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  height: calc(100% - 10px);
  width: 30px;
  font-weight: 600;
  background-color: transparent;
  color: ${p => p.theme.colors.primary};
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media screen and (min-width: 795px) {
    top: 0;
    transform: translateY(0);
    right: 0;
    height: 100%;
  }
`;

export const BtnAddInput = styled.button`
  width: 345px;
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
  display: block;
  margin: 15px auto 15px;

  &:hover {
    background-color: ${p => p.theme.colors.buttonHover};
  }
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const DashboardWrapper = styled.div`
  padding: 15px 0;

  & .uppy-StatusBar.is-waiting .uppy-StatusBar-actions {
    justify-content: center;
  }

  & .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {
    background-color: ${p => p.theme.colors.accent};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    border-radius: 50px;
    outline: none;

    &:hover {
      background-color: ${p => p.theme.colors.buttonHover};
    }

    &:focus {
      background-color: ${p => p.theme.colors.accent};
      box-shadow: none;
    }
  }
`;
