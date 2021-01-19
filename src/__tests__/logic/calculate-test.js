import calculate from '../../logic/calculate';

const dataNull = {
  total: null,
  next: null,
  operation: null,
};
const dataFull = {
  total: 25,
  next: 5,
  operation: '+',
};

describe('Calculate Methods', () => {
  it('AC functionality turns all attributes nill', () => {
    const newData = calculate(dataFull, 'AC');
    expect(newData).toStrictEqual(dataNull);
  });

  it('+/- functionality reverse total number', () => {
    const newData = calculate(dataFull, '+/-');
    expect(Math.sign(newData.total)).toBe(-1);
  });

  it('+/- functionality reverse next number', () => {
    const newData = calculate(dataFull, '+/-');
    expect(Math.sign(newData.next)).not.toBe(1);
  });

  it('% functionality turns next into percentage based number', () => {
    const newData = calculate(dataFull, '%');
    expect(newData.next).toBe(0.05);
  });

  it('total is not modified by % functionality', () => {
    const newData = calculate(dataFull, '%');
    expect(newData.total).not.toBe(0.25);
  });

  it('% functionality not modifies the operator', () => {
    const newData = calculate(dataFull, '%');
    expect(newData.operation).toBe('+');
  });

  it('If a operator is clicked and a operation was already defined the old operation is realized', () => {
    const newData = calculate(dataFull, '+');
    expect(newData.total).toBe('30');
  });

  it('If a operator is clicked and a operation was defined operation is kept for a new sentence', () => {
    const newData = calculate(dataFull, '-');
    expect(newData.operation).toBe('-');
  });

  it('If a operator is clicked and a operation was defined operation is kept for a new sentence', () => {
    const newData = calculate(dataFull, '-');
    expect(newData.operation).toBe('-');
  });

  it('If a operator is clicked and a first number is not defined, there is no effect', () => {
    const newData = calculate(dataNull, '-');
    expect(newData.operation).not.toBe('-');
  });

  it(' = Functionality resolves the sentence', () => {
    const newData = calculate(dataFull, '=');
    expect(newData.total).toBe('30');
  });

  it('If a number is pressed it is added to the units of next', () => {
    const newData = calculate(dataFull, '6');
    expect(newData.next).toBe('56');
  });

  it('If a number is pressed it does not replace the next', () => {
    const newData = calculate(dataFull, '6');
    expect(newData.next).not.toBe('6');
  });

  it('If a number is pressed it is added to the units of next', () => {
    const newData = calculate(dataFull, '6');
    expect(newData.next).toBe('56');
  });

  it('If . is pressed it is concataneted to the number', () => {
    const newData = calculate(dataFull, '.');
    expect(newData.next).toBe('5.');
  });
});
