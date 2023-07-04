import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, ...props }) => {
  const buttonMode = primary ? 'bg-blue hover:bg-blue-700 text-white' : 'outline outline-2 outline-blue text-blue';
  const buttonSize = (() => {
    switch(size) {
      case "small":
        return 'text-xs	py-1 px-2';
      case "large":
        return 'py-1 px-4';
      default:
        return 'text-sm	py-1 px-3'
    }
  })();
  return (
    <button
      type="button"
      className={['rounded-xl font-semibold uppercase', buttonSize, buttonMode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
