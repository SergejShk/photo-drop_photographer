import styled from 'styled-components';

export const ContainerLoader = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    @keyframes beat {
      to {
        transform: scale(1.2);
      }
    }

    animation: beat 0.5s infinite alternate;
  }
`;
