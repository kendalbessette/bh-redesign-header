import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  margin-top: 20px;
  position: fixed;
  top: 0;
`;

export const StyledNavBarLinkExternal = styled(Link)`
  margin-top: 25px;
  z-index: 3;
  padding-left: 5px;
  &.active span {
    background-size: 5% 100%;
  }

  &:hover span {
  }

  & span {
    background-image: ${({theme}) => theme.colors.gradient8};
    background-repeat: no-repeat;
    background-size: 5% 0%;
    transition: background-size 0.5s;
    padding-left: 5px;
  }
`;

export const StyledNavBarLink = styled.a`
  color: #878a8e;
  padding: 10px;
  margin: 2px;
  border-radius: 35px;
  background: #f0f1f1;
  border-radius: 30px;
  vertical-align: middle;
  text-decoration: none;

  &.active span{
    background: black;
  }

  &:hover {
    background: #D5E6FF;
    color: #0060F0;
  }
`;
