import React from 'react';
import { StyledNavBarLink } from './style';

interface NavBarElementProps {
  title: string;
  active?: boolean;
  buttonStyle?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavBarElement: React.FC<NavBarElementProps> = ({
  title, active, buttonStyle, onClick,
}) => (
  <StyledNavBarLink className={active ? 'active' : ''} style={buttonStyle} onClick={onClick}>{title}</StyledNavBarLink>
);
