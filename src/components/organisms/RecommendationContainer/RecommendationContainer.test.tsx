import { render } from "@testing-library/react";
import { bookData } from "./constants";
import RecommendationContainer from "./RecommendationContainer";



describe("Should render container correctly", () => {
  const component = <RecommendationContainer data={bookData} />;

  it("Match Snapshot", () => {
    const { container } = render(<RecommendationContainer data={bookData} />);
    expect(container).toMatchSnapshot();
  });

  test("Should render correctly", () => {
    const { container } = render(<RecommendationContainer data={bookData} />);
    expect(container).toBeInTheDocument();
  });
});
