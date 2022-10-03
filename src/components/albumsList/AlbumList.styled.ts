import styled from 'styled-components';

export const AlbumListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .item {
    width: calc((100% - 1 * 15px) / 2);
  }

  .link {
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.97;
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    fill: #3300cc;
    margin-right: 15px;
  }

  .title-text {
    font-weight: 700;
  }
`;
