import operate from './operate';

const dataDefault = {
  total: null,
  next: null,
  operation: '',
};

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  let newData = {};
  switch (buttonName) {
    case 'AC':
      total = dataDefault.total;
      next = dataDefault.next;
      operation = dataDefault.operation;
      break;
    case '+/-':
      total *= -1;
      break;
    case '%':
    case '÷':
    case 'X':
    case '-':
    case '+':
      if ((total || total === 0) && (next || next === 0) && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = '';
      }
      break;
    default:
    //   BUILD
      break;
  }
  newData = { total, next, operation };
  return newData;
};

export default calculate;
