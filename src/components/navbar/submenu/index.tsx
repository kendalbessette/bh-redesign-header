import React from 'react';
import {SubMenuItem} from '../submenuitem';

import {SubMenuContainer} from './style';

// placeholder route values
const subRoutes = [
  {
    path: 'work',
    title: 'Work',
    submenuTitle: 'Development',
    subcategories: {
      title: 'Android',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/services',
    title: 'Services',
    submenuTitle: 'Development',
    subcategories: {
      title: 'iOS App',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/industries',
    title: 'Industries',
    submenuTitle: 'Development',
    subcategories: {
      title: 'Web App',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/about',
    title: 'About',
    submenuTitle: 'Development',
    subcategories: {
      title: 'React Native',
      path: '/services/enterprise-app-development',
    },
  },
  {
    path: '/careers',
    title: 'Careers',
    submenuTitle: 'Development',
    subcategories: {
      title: 'Enterprise',
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

export function SubMenu() {
  return (
    <SubMenuContainer>
      {subRoutes.map(subRoute => (
        <div>
          <SubMenuItem
            subMenuTitle={subRoute.subcategories.title}
            nextLinkProps={{href: subRoute.subcategories.path}}
            key={`nav_route_${subRoute.subcategories.path}`}
          />
        </div>
      ))}
    </SubMenuContainer>
  );
}
