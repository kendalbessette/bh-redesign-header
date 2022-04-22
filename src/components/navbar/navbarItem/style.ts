import styled from 'styled-components';

export const StyledNavBarLink = styled.button`
  font-family: sans-serif;
  color: #878a8e;
  padding: 10px;
  margin: 2px;
  border-radius: 35px;
  background: #f0f1f1;
  vertical-align: middle;
  text-decoration: none;
  border: none;

  & .active {
    color: #ffffff;
  }

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;
