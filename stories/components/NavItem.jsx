import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const NavItem = ({ label, ...props }) => {
  return (
    <a href="#"
       className='block text-sm font-medium hover:text-blue hover:fill-blue py-3'
       {...props}>
        <span>
          <svg className='inline h-6 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,14A6,6,0,1,0,6,8,6,6,0,0,0,12,14ZM12,3.8A4.2,4.2,0,1,1,7.8,8,4.2,4.2,0,0,1,12,3.8Zm2.61,3.4H12.8V5H11.2V8.8h3.41ZM20,20V17H18v3H13V17H11v3H6V17H4v3H1v2H23V20Z"/>
          </svg>
        </span>
        {label}
    </a>
  );
};

NavItem.propTypes = {
  /**
   * Nav item contents
   */
  label: PropTypes.string.isRequired,
};

NavItem.defaultProps = {};
