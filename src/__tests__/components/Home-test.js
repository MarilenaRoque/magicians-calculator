import renderer from "react-test-renderer";
import Home from "../../components/Home";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';


describe('Home page Component', () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  it("renders Home page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
})

describe('Testing Home components', () => {

  it("Quotes renders a head with the right text", () => {
    render(<Home></Home>)
    expect(screen.getByRole('heading')).toHaveTextContent("Welcome to Math Magicians!")
  });
   
})