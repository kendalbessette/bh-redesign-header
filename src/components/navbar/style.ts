import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  margin-top: 30px;
  position: fixed;
  top: 0;
`;

export const StyledSubMenuLink = styled.a`
  font-family: sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #0060f0;
  }

  &:active {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &: ;
`;

export const StyledSubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
