import React from 'react';
import {NavContainer, StyledSubMenuContainer, StyledSubMenuLink} from './style';
import {BigHumanLogoCircle} from '../../assets/bighumanlogo';
import Dropdown from './dropdown';
import Link from 'next/link';

//placeholder route data
const routes = [
  {
    path: 'work',
    title: 'Work',
    id: '1',
    submenuTitle: 'Development',
    subcategories: [
      {
        title: 'Work Submenu',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Work Submenu 2',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Work Submenu 3',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Work Submenu 4',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Work Submenu 5',
        path: '/services/enterprise-app-development',
      },
    ],
  },
  {
    path: '/services',
    title: 'Services',
    id: '2',
    submenuTitle: 'Development',
    subcategories: [
      {
        title: 'Services Submenu',
        path: '/services/enterprise-app-development',
      },
    ],
  },
  {
    path: '/industries',
    title: 'Industries',
    id: '3',
    submenuTitle: 'Development',
    subcategories: [
      {
        title: 'Industries Submenu',
        path: '/services/enterprise-app-development',
      },
    ],
  },
  {
    path: '/about',
    title: 'About',
    submenuTitle: 'Development',
    id: '4',
    subcategories: [
      {
        title: 'About Submenu',
        path: '/services/enterprise-app-development',
      },
    ],
  },
  {
    path: '/careers',
    title: 'Careers',
    id: '5',
    submenuTitle: 'Development',
    subcategories: [
      {
        title: 'Careers Submenu ',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Careers Submenu 2',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Careers Submenu 3',
        path: '/services/enterprise-app-development',
      },
      {
        title: 'Careers Submenu 4',
        path: '/services/enterprise-app-development',
      },
    ],
  },
  {
    path: '/blog',
    title: 'Blog',
    id: '6',
    submenuTitle: 'Development',
    subcategories: [
      {
        title: 'Blog Submenu',
        path: '/services/enterprise-app-development',
      },
    ],
  },
];

interface NavBarProps {
  containerStyle?: React.CSSProperties;
}

export function Navbar({containerStyle}: NavBarProps) {
  return (
    <NavContainer>
      <a href="/">
        <BigHumanLogoCircle />
      </a>
      {routes.map(route => (
        <Dropdown label={route.title}>
          <div className="nav-submenu" style={containerStyle}>
            {route.subcategories.map(subMenu => (
              <StyledSubMenuContainer>
                <Link href={subMenu.path}>
                  <StyledSubMenuLink>
                    <a>{subMenu.title}</a>
                  </StyledSubMenuLink>
                </Link>
              </StyledSubMenuContainer>
            ))}
          </div>
        </Dropdown>
      ))}
    </NavContainer>
  );
}
