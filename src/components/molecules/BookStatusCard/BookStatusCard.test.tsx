import { render, screen, cleanup } from "@testing-library/react";
import BookStatusCard from "./BookStatusCard";

afterEach(cleanup);

describe("BookCard Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <BookStatusCard
        title="Nature Chemistry"
        field="Chemistry"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
        upCount={12}
        total={200}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Checking The title", () => {
    render(
      <BookStatusCard
        title="Nature Chemistry"
        field="Chemistry"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
        upCount={12}
        total={200}
      />
    );

    expect(screen.getByText("Nature Chemistry")).toBeInTheDocument();
    expect(screen.getByText("J D Lee")).toBeInTheDocument();
    expect(screen.getByText("Chemistry")).toBeInTheDocument();
  });
});
