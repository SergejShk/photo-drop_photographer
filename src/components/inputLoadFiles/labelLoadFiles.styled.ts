import styled from 'styled-components';

export const LabelLoadFilesStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.27;
  letter-spacing: 0.03em;
  color: #ffffff;
  background: #3300cc;
  border-radius: 50px;
  border: none;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 0.95;
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
`;
