import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-math.svg';

export default function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    alignItems: 'center',
  };
  return (
    <div style={navbarStyle}>
      <img src={logo} style={{ height: '100px' }} alt="Math Magicians Logo" />
      <div className="right" style={{ fontSize: '28px' }}>
        <Link to="/" style={{ fontSize: '28px' }}> Home </Link>
        {' '}
        |
        <Link to="/calculator" style={{ fontSize: '28px' }}> Calculator </Link>
        {'  '}
        |
        <Link to="/quote" style={{ fontSize: '28px' }}> Quote </Link>
        {'  '}
      </div>
    </div>
  );
}
