import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler } = props;

  const orangeButtons = ['÷', 'X', '-', '+', '='];

  const buttonColor = name => (orangeButtons.includes(name) ? '#F5913E' : '#E0E0E0');

  const buttonStyle = {
    height: '110px',
    backgroundColor: buttonColor(name),
    width: name !== '0' ? '25%' : '50%',
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
};

Button.defaultProps = {
  name: '',
};
export default Button;
