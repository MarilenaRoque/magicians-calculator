import renderer from "react-test-renderer";
import Quote from "../../components/Quote";


describe('Quote page Component', () => {

  const tree = renderer.create(<Quote></Quote>).toJSON();

  it("renders Quote page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  
})