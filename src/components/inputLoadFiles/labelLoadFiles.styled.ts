import styled from 'styled-components';

export const ContainerLoadFilesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .formEnterPhone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  .inputPhone {
    width: calc(100% - 30px);
    height: 40px;
    background: #f4f4f4;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-size: 18px;
    line-height: 1.28;
    padding: 5px 15px;
    margin-bottom: 20px;

    &:hover,
    &:focus {
      outline: 1px solid #3300cc;
    }
  }

  .btn {
    width: 100%;
    height: 40px;
    height: 50px;
    padding: 0 15px;
    font-size: 22px;
    line-height: 1.27;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .labelLoadFile {
    width: calc(100% / 3 - 75px);
    height: 50px;
    font-size: 22px;
    line-height: 1.27;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .text {
    font-size: 22px;
    line-height: 1.27;
    font-weight: 600;
    color: #3300cc;
  }
`;
