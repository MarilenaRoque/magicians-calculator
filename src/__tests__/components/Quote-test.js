import renderer from "react-test-renderer";
import Quote from "../../components/Quote";
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Quote page Component', () => {

  const tree = renderer.create(<Quote></Quote>).toJSON();

  it("renders Quote page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  
})

describe('Testing Quote components', () => {

  it("Quotes renders a quote with the right text", () => {
    render(<Quote></Quote>)
    expect(screen.getByRole('heading')).toHaveTextContent("You’re pointless.")
  });
  
})

