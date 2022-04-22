import styled from "styled-components";

export const StyledNavBarLink = styled.a`
  font-family: sans-serif;
  color: #878a8e;
  padding: 10px;
  margin: 2px;
  border-radius: 35px;
  background: #f0f1f1;
  border-radius: 30px;
  vertical-align: middle;
  text-decoration: none;

  &.active {
    background: #000000;
    color: #FFFFFF;  }

  &:hover {
    background: #000000;
    color: #FFFFFF;
  }
`;

export const NavBarElementContainer = styled.div``;
