import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { NavItem } from '../components/NavItem';

export const More = ({}) => (
  <Container
    content={
      <>
        <div className='flex flex-col'>
          <NavItem label="More"/>
        </div>
      </>
    }
  />
);

More.propTypes = {};

More.defaultProps = {};
