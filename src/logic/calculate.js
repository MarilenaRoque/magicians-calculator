import operate from './operate';

const dataDefault = {
  total: null,
  next: null,
  operation: null,
};

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (!next) { next = ''; }
  let newData = {};
  switch (buttonName) {
    case 'AC':
      total = dataDefault.total;
      next = dataDefault.next;
      operation = dataDefault.operation;
      break;
    case '+/-':
      if (total) { total *= -1; }
      next *= -1;
      break;
    // Transform the last number typed in a percetage based
    case '%':
      next /= 100;
      break;
    case '÷':
    case 'X':
    case '-':
    case '+':
      // if a operator is clicked but there are a completed sentence
      // It will resolve the operation and the result will turn the total for the next operation
      if ((total || total === 0) && (next || next === 0) && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = '';
        // if a operator is pressed but the sentence is not completed
        // it will keep the operator and empty the next variable to receive the second value
      } else if (next || next === 0) {
        total = next;
        next = '';
        operation = buttonName;
      }
      break;
    case '=':
      if ((total || total === 0) && (next || next === 0) && operation) {
        total = operate(total, next, operation);
        operation = '';
        next = '';
      }
      break;
    default:
      next = next.concat(buttonName);
      break;
  }
  newData = { total, next, operation };
  return newData;
};

export default calculate;
