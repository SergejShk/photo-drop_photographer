import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;
  height: 60px;
  padding: 0 15px;
  border-bottom: 1px solid #f1f0ec;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    width: 179px;
    height: 22px;
  }

  .goBack {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 10px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.primary};
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.accent};
    }

    @media screen and (min-width: 795px) {
      left: 40px;
    }
  }
`;
