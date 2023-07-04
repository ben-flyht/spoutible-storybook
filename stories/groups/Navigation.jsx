import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { NavItem } from '../components/NavItem';

export const Navigation = ({}) => (
  <Container
    content={
      <>
        <header className='border-b border-slate-200 py-3 bg-red'>
          <Logo/>
        </header>
        <div className='flex flex-col'>
          <NavItem label="Timeline" />
          <NavItem label="Profile" />
          <NavItem label="Notifications" />
          <NavItem label="Making Waves" />
          <NavItem label="Explore" />
          <NavItem label="Suggested Follows" />
          <NavItem label="Messages" />
          <NavItem label="Bookmarks" />
        </div>
      </>
    }
  />
);

Navigation.propTypes = {};

Navigation.defaultProps = {};
