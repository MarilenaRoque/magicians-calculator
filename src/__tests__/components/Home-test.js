import renderer from "react-test-renderer";
import Home from "../../components/Home";


describe('Home page Component', () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  it("renders Home page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
})