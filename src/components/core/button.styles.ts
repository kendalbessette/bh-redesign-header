import styled from 'styled-components';

const GenericButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: auto;
  width: auto;
  &:disabled {
    opacity: 0.45;
  }
`;

export default GenericButton;
