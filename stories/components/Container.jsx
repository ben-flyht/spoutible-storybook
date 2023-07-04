import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Container = ({ content, ...props }) => {
  return (
    <section className="rounded-xl outline outline-1 outline-slate-200 bg-white px-3">
      {content}
    </section>
  );
};

Container.propTypes = {
  /**
   * Container content
   */
  content: PropTypes.string.isRequired,
};

Container.defaultProps = {};
