import Link, { LinkProps } from 'next/link';
import React from 'react';
import { StyledNavBarLink, NavBarElementContainer } from './style'


interface NavBarElementProps {
    title: string;
    active: boolean;
    nextLinkProps: LinkProps;
    containerStyle?: HTMLDivElement;  
    linkStyle?: HTMLAnchorElement; 
  }

  
  export const NavBarElement: React.FC<NavBarElementProps> = ({
    title,
    active = false,
    nextLinkProps,
    containerStyle, 
  }) =>
   (
      <NavBarElementContainer style={containerStyle}>
        <Link {...nextLinkProps}>
          <StyledNavBarLink className={active ? 'active' : ''}>{title}</StyledNavBarLink>
        </Link>
      </NavBarElementContainer>
    );
  