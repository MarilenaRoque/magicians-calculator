import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Routes from '../../components/Routes';
import '@testing-library/jest-dom';

describe('Routes Component', () => {
  const tree = renderer.create(<Routes />).toJSON();
  it('renders Routes page correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
describe('App content and Navbar links', () => {
  it('Default content page is Home', () => {
    render(<Routes />);
    expect(screen.getByTestId('page-content')).toHaveTextContent('Welcome to Math Magicians!');
  });
  it('Calculator Page is displayed if you click in the Calculator Link in the Navbar', () => {
    render(<Routes />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByTestId('page-content')).toHaveTextContent('Let’s do some math!');
  });
  it('Calculator Page is displayed if you click in the Calculator Link in the Navbar', () => {
    render(<Routes />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByTestId('page-content')).toHaveTextContent('You’re pointless.');
  });
});
