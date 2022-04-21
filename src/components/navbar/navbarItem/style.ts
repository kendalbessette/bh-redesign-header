import styled from "styled-components";

export const StyledNavBarLink = styled.a`
  color: #878a8e;
  padding: 10px;
  margin: 2px;
  border-radius: 35px;
  background: #f0f1f1;
  border-radius: 30px;
  vertical-align: middle;
  text-decoration: none;

  &.active a {
    background: black;
  }

  &:hover {
    background: #D5E6FF;
    color: #0060F0;
  }
`;

export const NavBarElementContainer = styled.div``;
