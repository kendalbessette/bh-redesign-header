import Link, {LinkProps} from 'next/link';
import React from 'react';
import {StyledNavBarLink, NavBarElementContainer} from './style';
interface NavBarElementProps {
  title: string;
  active?: boolean;
  nextLinkProps: LinkProps;
  containerStyle?: HTMLDivElement;
  linkStyle?: HTMLAnchorElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;

}

export const NavBarElement: React.FC<NavBarElementProps> = ({title, nextLinkProps, active}) => (
  <NavBarElementContainer>
    <Link {...nextLinkProps}>
      <StyledNavBarLink className={active ? 'active' : ''}>
        {title}
      </StyledNavBarLink>
    </Link>
  </NavBarElementContainer>
);
