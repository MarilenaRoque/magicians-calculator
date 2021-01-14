import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler, color } = props;

  const buttonStyle = {
    height: '100px',
    width: name !== '0' ? '25%' : '50%',
    fontSize: '25px',
    backgroundColor: color,
  };

  return (
    <React.StrictMode>
      <button type="button" onClick={() => clickHandler(name)} style={buttonStyle}>{name}</button>
    </React.StrictMode>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  color: '#E0E0E0',
};
export default Button;
