import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  .btn {
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #3300cc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.95;
    }
  }
  .icon {
    width: 15px;
    height: 15px;
    fill: #3300cc;
  }
`;
