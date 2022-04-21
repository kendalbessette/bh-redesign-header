import React from 'react';
import { Navbar } from '../navbar'

interface HeaderProps {
  prop?: any;
}


export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return <Navbar />;
};

Header.displayName = 'Header';

export default Header;
