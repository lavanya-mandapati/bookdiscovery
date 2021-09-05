import {render} from "@testing-library/react";
import Button from './Button';

describe("Button Component", () => {
    test("Matches Snapshot", () => {
        const { asFragment } = render(<Button name="Discover" />);
        expect(asFragment.name).toMatchSnapshot()
    });
});
