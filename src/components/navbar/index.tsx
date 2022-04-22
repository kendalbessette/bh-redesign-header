import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {NavBarElement} from './navbarItem';
import {NavContainer} from './style';
import {SubMenu} from './submenu';
import { BigHumanLogoCirlce } from '../../assets/bighumanlogo';

//placeholder route values
const routes = [
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

export const Navbar = () => {
  const router = useRouter();
  const currentpath =  router.pathname;
  const [show, setShow] = useState(false);

  console.log(router.pathname); 

  return (
    <div>
      <NavContainer>
        <BigHumanLogoCirlce />
        {routes.map(route => {
          return (
            <nav>
              <NavBarElement
                nextLinkProps={{href: route.path}}
                key={`nav_route_${route.path}`}
                title={route.title}
                active={route.path === currentpath}
                onClick={() => {
                  setShow(!show)
                }}
              />
            </nav>
          );
        })}
      </NavContainer>
      <SubMenu />
    </div>
  );
};
