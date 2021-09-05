
import { render,screen, cleanup } from '@testing-library/react';
import HeaderItem from './Header';

afterEach(cleanup)

describe('Header Testing', () => {

    it('Checking The title', () => {
        render(<HeaderItem/>)
    
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText("Z-Athena")).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    })

})