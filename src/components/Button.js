import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <React.StrictMode>
      <button type="button">{name}</button>
    </React.StrictMode>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
export default Button;
