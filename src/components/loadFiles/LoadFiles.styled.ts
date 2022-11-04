import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (min-width: 795px) {
    width: 345px;
  }
`;

export const TextInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: transparent;
  margin-bottom: 15px;

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const InputPhone = styled.input`
  width: calc(100% - 30px);
  height: 30px;
  background-color: #f4f4f4;
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
  }
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

  &:hover {
    background-color: ${p => p.theme.colors.buttonHover};
  }
`;

export const LabelLoadFiles = styled.label`
  width: calc(100% - 40px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.accent};
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

  &:hover {
    background-color: ${p => p.theme.colors.buttonHover};
  }

  @media screen and (min-width: 795px) {
    width: 305px;
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
