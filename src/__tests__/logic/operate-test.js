import operate from '../../logic/operate';

describe('Operate Methods', () => {
  it('Resolves + operation', () => {
    const result = operate('35', '5', '+');
    expect(result).toBe('40');
  });

  it('Resolves - operation', () => {
    const result = operate('35', '5', '-');
    expect(result).toBe('30');
  });

  it('Resolves x operation', () => {
    const result = operate('10', '5', 'X');
    expect(result).toBe('50');
  });

  it('Resolves x operation', () => {
    const result = operate('10', '5', '÷');
    expect(result).toBe('2');
  });

  it('Return Error message if try to divide by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe('ERROR');
  });
});
