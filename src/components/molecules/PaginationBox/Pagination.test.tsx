import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Testing", () => {
  test("Matches Snapshot", () => {
    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });
  it("Checking Pagination", () => {
    const { container } = render(<Pagination />);
    expect(container).toBeInTheDocument();
  });
});
