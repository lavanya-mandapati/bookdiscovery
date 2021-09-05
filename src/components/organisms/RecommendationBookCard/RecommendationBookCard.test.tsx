import { render, cleanup } from '@testing-library/react'
import RecommendationBookCard from './RecommendationBookCard'

afterEach(cleanup);

describe('RecommdationBookCard Testing', () => {

    it.only('Matches Snapshot', () => {
        const { container } = render(<RecommendationBookCard title="Nature Chemistry"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" />);
        expect(container).toMatchSnapshot();
    });


    it('Should render image correctly', () => {
        const { container } = render(<RecommendationBookCard title="Nature Chemistry"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" />);
        expect(container.children).toBeInTheDocument();
    });
})