import renderer from 'react-test-renderer';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('App page Component', () => {
  const tree = renderer.create(<App />).toJSON();
  it('renders App page correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
