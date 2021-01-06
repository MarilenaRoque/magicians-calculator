import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const newNumberOne = Big(numberOne);
  const newNumberTwo = Big(numberTwo);
  let result = '';
  switch (operation) {
    case '+':
      result = newNumberOne + newNumberTwo;
      break;
    case '-':
      result = newNumberOne - newNumberTwo;
      break;
    case 'X':
      result = newNumberOne * newNumberTwo;
      break;
    case '÷':
      result = numberTwo === 0 ? 'ERROR' : newNumberOne / newNumberTwo;
      break;
    case '%':
      result = (newNumberOne / 100) * newNumberTwo;
      break;
    default:
      result = 'ERROR';
  }
  console.log(result);
  return (result);
};

export default operate;
