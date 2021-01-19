import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../components/Calculator';
import '@testing-library/jest-dom';

describe('Calculator page Component', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  it('renders Calculator page correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Calculator components', () => {
  it('Presents Default Contest on Display', () => {
    render(<Calculator />);
    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });

  it('When a number is pressed it is displayed at the Display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByTestId('display')).toHaveTextContent('2');
  });

  it("Calculator is able to complete an '+' operation", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('4');
  });

  it("Calculator is able to complete an '-' operation", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('-2');
  });

  it("Calculator is able to complete an 'X' operation", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('X'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('8');
  });

  it("Calculator is able to complete an '' operation", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('2');
  });

  it('Calculator is able to reset display with AC', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });

  it('Calculator is able to trasform percentage number ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('%'));
    expect(screen.getByTestId('display')).toHaveTextContent('0.05');
  });

  it('Calculator invert number', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display')).toHaveTextContent('-5');
  });
});
