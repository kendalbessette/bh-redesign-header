import Link, { LinkProps } from 'next/link';
import React from 'react';
import { StyledSubMenuLink, SubMenuElementContainer } from './style';

interface SubMenuItemProps {
  subMenuTitle?: string;
  nextLinkProps: LinkProps;
  containerStyle?: React.CSSProperties;
  linkStyle?: HTMLAnchorElement;
}

export const SubMenuItem: React.FC<SubMenuItemProps> = ({
  subMenuTitle,
  nextLinkProps,
  containerStyle,
}) => (
  <SubMenuElementContainer style={containerStyle}>
    <Link {...nextLinkProps}>
      <StyledSubMenuLink>{subMenuTitle}</StyledSubMenuLink>
    </Link>
  </SubMenuElementContainer>
);
