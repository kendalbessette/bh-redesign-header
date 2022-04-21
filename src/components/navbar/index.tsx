import React from 'react';
import {useRouter} from 'next/router';
import { NavBarElement } from './navbarItem';


import {
  NavContainer,
} from './style';


//placeholder route values
const routes = [
  {
    path: '/work',
    title: 'Work',
    external: false,
  },
  {
    path: '/services',
    title: 'Services',
    external: false,
  },
  {
    path: '/industries',
    title: 'Industries',
    external: false,
  },
  {
    path: '/about',
    title: 'About',
    external: false,
  },
  {
    path: '/careers',
    title: 'Careers',
    external: false,
  },
  {
    path: '/blog',
    title: 'Blog',
    external: false,
  },
];

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <NavContainer>
      {routes.map(route => {
        return (
          <NavBarElement
            nextLinkProps={{href:route.path}}
            key={`nav_route_${route.path}`}
            title={route.title}
            active={route.path === pathname}
          />
        );
      })}
    </NavContainer>
  );
};
