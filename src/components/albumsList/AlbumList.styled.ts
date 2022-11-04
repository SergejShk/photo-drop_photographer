import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 15px;

  .link {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .icon {
    width: 40px;
    height: 40px;
    fill: ${p => p.theme.colors.muted};
    margin-right: 15px;
  }
`;

export const Item = styled.li`
  width: 345px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #e9e8eb;
  }
`;
