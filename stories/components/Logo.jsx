import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ ...props }) => {
  return (
    <div>
      <a href="https://spoutible.com" className="">
        <img alt="Logo" className="max-w-[170px]" src="https://spoutible.com/themes/default/statics/img/logo2.png" />
      </a>
    </div>
  );
};

Logo.propTypes = {};

Logo.defaultProps = {};
