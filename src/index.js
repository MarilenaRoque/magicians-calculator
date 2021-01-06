import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import calculate from './logic/calculate';

const testData = {
  total: 1.5,
  next: 0,
  operation: '%',
};
console.log(calculate(testData, 'AC'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
