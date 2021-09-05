import { render } from "@testing-library/react";
import Pagination from './Pagination';

describe('Pagination Testing', () => {

    it('Checking Pagination', () => {
        const {container}=render(<Pagination />)
        expect(container).toBeInTheDocument();
    })
});