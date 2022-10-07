import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const Title = styled.h2`
  color: #3300cc;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  color: #3300cc;
  background-color: #ffffff;
  border: 1px solid #3300cc;
  padding: 5px;
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #24028b;
    outline: 1px solid #3300cc;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
