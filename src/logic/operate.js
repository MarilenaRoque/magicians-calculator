import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const newNumberOne = Big(numberOne);
  const newNumberTwo = Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = newNumberOne.plus(newNumberTwo);
      break;
    case '-':
      result = newNumberOne.minus(newNumberTwo);
      break;
    case 'X':
      result = newNumberOne.times(newNumberTwo);
      break;
    case '÷':
      result = numberTwo === 0 ? 'ERROR' : newNumberOne.div(newNumberTwo);
      break;
    default:
      result = 'ERROR';
  }
  return (result.toString());
};

export default operate;
