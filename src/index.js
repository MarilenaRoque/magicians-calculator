import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import calculate from './logic/calculate';

const testData = {
  total: null,
  next: 20,
  operation: null,
};
console.log(calculate(testData, 'X'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
