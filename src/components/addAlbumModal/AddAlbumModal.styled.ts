import styled from 'styled-components';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 30;

  .modal {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 380px;
    padding: 15px;
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
    border-radius: 10px;
  }

  .addAlbum__input {
    width: calc(100% - 30px);
    height: 40px;
    background: #f4f4f4;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-size: 18px;
    line-height: 1.28;
    padding: 15px;
    margin-bottom: 20px;

    &:hover,
    &:focus {
      outline: 1px solid #3300cc;
    }
  }

  .addAlbum__btn {
    width: 100%;
    height: 50px;
    padding: 15px;
    font-size: 22px;
    line-height: 1.27;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #3300cc;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      scale: 0.95;
    }
  }
`;
