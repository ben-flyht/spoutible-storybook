import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ icon, primary, size, label, ...props }) => {
  const buttonMode = primary ? 'bg-blue hover:bg-sky-600 text-white' : 'outline outline-2 outline-blue text-blue';
  const buttonSize = (() => {
    switch(size) {
      case "small":
        return 'text-xs	py-1 px-2';
      case "large":
        return 'text-sm	py-2 px-4';
      default:
        return 'text-sm	py-1 px-3'
    }
  })();
  return (
    <button
      type="button"
      className={['flex place-items-center justify-center rounded-xl font-bold uppercase', buttonSize, buttonMode].join(' ')}
      {...props}
    >
      {icon &&
        <svg className='inline h-4 mr-2 fill-white' xmlns="http://www.w3.org/2000/svg" version="1.1" id="sptbl-icon" viewBox="0 0 294.649 294.649">
          <path d="M158.116,6.916c-1.938-4.214-6.151-6.915-10.789-6.916c-4.639-0.001-8.855,2.697-10.793,6.911  c-29.875,64.975-82.858,148.605-82.858,194.09c0,51.721,41.927,93.648,93.648,93.648s93.649-41.928,93.649-93.648  C240.974,155.519,187.992,71.891,158.116,6.916z M143.324,264.816c-34.601,0-62.75-28.149-62.75-62.75c0-6.903,5.597-12.5,12.5-12.5  c6.903,0,12.5,5.597,12.5,12.5c0,20.815,16.935,37.75,37.75,37.75c6.903,0,12.5,5.597,12.5,12.5  C155.824,259.22,150.227,264.816,143.324,264.816z"/>
        </svg>
      }
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  icon: PropTypes.bool,
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
  icon: false,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
