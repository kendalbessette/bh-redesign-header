import React, {useState} from 'react';
import {NavBarElement} from './navbarItem';
import {NavContainer} from './style';
import {BigHumanLogoCircle} from '../../assets/bighumanlogo';
import {SubMenu} from './submenu';

//placeholder route data
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

export function Navbar() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div>
      <NavContainer>
        <a href="/">
          <BigHumanLogoCircle />
        </a>
        {routes.map(route => (
          <nav>
            <NavBarElement title={route.title} key={`nav_item_${route.path}`} onClick={toggleShow} />
          </nav>
        ))}
      </NavContainer>
      {show && <SubMenu />}
    </div>
  );
}
