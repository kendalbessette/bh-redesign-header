import Link, {LinkProps} from 'next/link';
import React from 'react';
import {StyledSubMenuLink, SubMenuElementContainer} from './style';

interface SubMenuItemProps {
  subMenuTitle?: string;
  nextLinkProps: LinkProps;
  containerStyle?: HTMLDivElement;
  linkStyle?: HTMLAnchorElement;
}

export const SubMenuItem: React.FC<SubMenuItemProps> = ({ subMenuTitle, nextLinkProps, }) => (
  <SubMenuElementContainer>
    <Link {...nextLinkProps}>
      <StyledSubMenuLink>
        {subMenuTitle}
      </StyledSubMenuLink>
    </Link>
  </SubMenuElementContainer>
);