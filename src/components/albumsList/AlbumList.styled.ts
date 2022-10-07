import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .link {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.99;
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    fill: #3300cc;
    margin-right: 15px;
  }
`;

export const Item = styled.li`
  width: calc((100% - 1 * 15px) / 2);
`;
