import styled from 'styled-components';

export const NavBar = styled.button`
  font-family: sans-serif;
  color: #878a8e;
  padding: 10px;
  margin: 2px;
  border-radius: 35px;
  background: #f0f1f1;
  vertical-align: middle;
  text-decoration: none;
  border: none;

  &:hover {
    background: black;
    color: white;
  }
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  padding: 30px 45px 60px;
  border-radius: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 97%;
`;
