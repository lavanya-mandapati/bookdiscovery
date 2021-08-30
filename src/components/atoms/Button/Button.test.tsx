import {render} from "@testing-library/react";
import Button from './Button';

describe("button renders correctly", () => {
    test("should match snapshot", () => {
        const { asFragment } = render(<Button name="Discover" />);
        expect(asFragment()).toMatchSnapshot()
    });
  
  });

