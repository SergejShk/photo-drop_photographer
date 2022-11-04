import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.accent};
`;

export const Button = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  padding: 5px;
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.buttonHover};
    outline: 1px solid ${p => p.theme.colors.accent};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
