// import Big from 'big.js';

const operate = (NumberOne, NumberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '+':
      result = NumberOne + NumberTwo;
      break;
    case '-':
      result = NumberOne - NumberTwo;
      break;
    case 'X':
      result = NumberOne * NumberTwo;
      break;
    case '÷':
      result = NumberOne / NumberTwo;
      break;
    case '%':
      result = (NumberOne / 100) * NumberTwo;
      break;
    default:
      result = 'ERROR';
  }
  console.log(result);
  return (result);
};

export default operate;
