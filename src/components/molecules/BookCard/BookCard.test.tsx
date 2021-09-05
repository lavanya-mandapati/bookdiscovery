import { render, screen, cleanup } from "@testing-library/react";
import BookCard from "./BookCard";

afterEach(cleanup);

describe("BookCard Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <BookCard
        title="Nature Chemistry"
        desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Checking Fields", () => {
    render(
      <BookCard
        title="Nature Chemistry"
        desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
      />
    );

    expect(screen.getByText("Nature Chemistry")).toBeInTheDocument();
    expect(screen.getByText("J D Lee")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
      )
    ).toBeInTheDocument();
  });
});
