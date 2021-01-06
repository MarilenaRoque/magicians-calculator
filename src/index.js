import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import operate from './logic/operate';

operate(0, 20, '%');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
