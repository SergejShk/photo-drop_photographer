import styled from 'styled-components';

export const AlbumContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .link {
    padding: 10px;
    display: flex;
    align-items: center;
    color: #3300cc;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.27;
    letter-spacing: 0.03em;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #24028b;
    }
  }
`;
