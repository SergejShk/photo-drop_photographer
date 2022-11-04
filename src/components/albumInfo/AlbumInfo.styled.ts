import styled from 'styled-components';

export const TextWrapper = styled.div`
  padding: 15px 0;
`;

export const TextInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primary};

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
