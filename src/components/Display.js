import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const styleDisplay = {
    height: '100px',
    backgroundColor: '#858693',
    color: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  };

  const h1Style = {
    fontSize: '60px',
    margin: '0px',
    fontWeight: 'bold',
    textAlign: 'right',
  };

  const { next } = props;
  return (
    <div data-testid='display' style={styleDisplay}>
      <h3 style={h1Style}>{next}</h3>
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
