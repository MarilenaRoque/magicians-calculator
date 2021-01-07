import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { next } = props;
  return (
    <div>
      <h3>{next}</h3>
    </div>
  );
}

Display.propTypes = {
  next: PropTypes.string,
};

Display.defaultProps = {
  next: '0',
};

export default Display;
