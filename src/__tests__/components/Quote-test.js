import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../../components/Quote';
import '@testing-library/jest-dom';

describe('Quote page Component', () => {
  const tree = renderer.create(<Quote />).toJSON();

  it('renders Quote page correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Quote components', () => {
  it('Quotes renders a quote with the right text', () => {
    render(<Quote />);
    expect(screen.getByRole('heading')).toHaveTextContent('You’re pointless.');
  });
});
