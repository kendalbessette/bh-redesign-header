import React from 'react';
import { SubMenuItem } from '../submenuitem';

import {
  SubMenuContainer,
} from './style';


//placeholder route values
const subRoutes = [
  {
    path: 'work',
    title: 'Work',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/services',
    title: 'Services',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/industries',
    title: 'Industries',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/about',
    title: 'About',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/careers',
    title: 'Careers',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/blog',
    title: 'Blog',
    submenuTitle: 'Development',
    subcategories: {
      title: 'App Development',
      path: '/services/enterprise-app-development',
    },
  },
];

export const SubMenu = () => {

  return (
    <SubMenuContainer>
      {subRoutes.map(route => {
        return (
          <div>
          <SubMenuItem
            subMenuTitle={route.title}
            nextLinkProps={{href: route.subcategories.path}}
            key={`nav_route_${route.subcategories.path}`}
          />
        </div>
        );
      })}
    </SubMenuContainer>
  );
};