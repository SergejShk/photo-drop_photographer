import styled from 'styled-components';

export const AlbumContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .link {
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.27;
    letter-spacing: 0.03em;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.95;
    }
  }

  .icon {
    width: 15px;
    height: 15px;
  }

  .btn {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 16px;
    line-height: 1.27;
    letter-spacing: 0.03em;
    color: #ffffff;
    background: #3300cc;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.95;
    }
  }
`;
