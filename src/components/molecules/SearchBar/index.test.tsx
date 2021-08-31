import {render,fireEvent,screen, queryByPlaceholderText} from '@testing-library/react';
import SearchBar from ".";

describe('Searchbar test',()=>{
    const handleChange=jest.fn();
    const component=(<SearchBar placeholder="search test" searchValue='Atomic Habits' />);

    it('Should match the snapshot',()=>{
        const {container}=render(component);
        expect(container.firstChild).toMatchSnapshot();
    });
    it('Should render value on screen',()=>{
        const {container}=render(component);
        const value=container.querySelector('input')?.value;
        expect(value).toBe('Atomic Habits');
        expect(container.querySelector('input')).toBeInTheDocument();
    });

})