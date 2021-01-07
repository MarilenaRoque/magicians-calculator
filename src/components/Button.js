import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler } = props;
  return (
    <React.StrictMode>
      <button type="button" onClick={() => clickHandler(name)}>{name}</button>
    </React.StrictMode>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};
export default Button;
