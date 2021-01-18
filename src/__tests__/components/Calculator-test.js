import renderer from "react-test-renderer";
import Calculator from "../../components/Calculator";


describe('Calculator page Component', () => {
  const tree = renderer.create(<Calculator></Calculator>).toJSON();
  it("renders Calculator page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});