import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import calculate from './logic/calculate';

const testData = {
  total: 1.5,
  next: 30,
  operation: '%',
};
console.log(calculate(testData, '-'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
