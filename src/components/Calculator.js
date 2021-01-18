import React from 'react';
import App from './App';

export default function Calculator() {
  const calculatorStyle = {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };
  return (
    <div style={calculatorStyle}>
      <p style={{ fontSize: '30px' }}> Let’s do some math! </p>
      <App />
    </div>
  );
}
