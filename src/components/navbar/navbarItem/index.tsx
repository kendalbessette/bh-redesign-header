import React from 'react';
import {StyledNavBarButton} from './style';
interface NavBarElementProps {
  title: string;
  active?: boolean;
  buttonStyle?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavBarElement: React.FC<NavBarElementProps> = ({title, active, buttonStyle, onClick}) => (
  <StyledNavBarButton className={active ? 'active' : ''} style={buttonStyle} onClick={onClick}>
    {title}
  </StyledNavBarButton>
);
