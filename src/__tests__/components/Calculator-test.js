import renderer from "react-test-renderer";
import Calculator from "../../components/Calculator";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Calculator page Component', () => {
  const tree = renderer.create(<Calculator></Calculator>).toJSON();
  it("renders Calculator page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Calculator components', () => {<u></u>
   
})