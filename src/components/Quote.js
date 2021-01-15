import React from 'react';

export default function Quote() {
  const quoteStyle = {
    display: 'flex',
    displayDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
  };
  return (
    <div style={quoteStyle}>
      <h3 style={{ fontSize: '30px' }}>What did the triangle say to the circle? “You’re pointless.”</h3>
    </div>
  );
}
