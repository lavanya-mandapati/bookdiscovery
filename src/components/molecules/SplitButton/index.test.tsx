import {fireEvent, getByTestId, render,screen} from '@testing-library/react';
import SplitButton from ".";

describe('Searchbar test',()=>{
    const selectedId=1
    const newSelected=2
    const items=["Dropdown1","Dropdown2","Dropdown3"]
    const component=(<SplitButton selectedId={selectedId} items={items} />);
    afterEach(()=>{
        jest.clearAllMocks();
    });

    it('Should render dropdown correctly',()=>{
        const container=render(<SplitButton selectedId={selectedId} items={items} />);
         expect(screen.queryByText("Dropdown2")).toBeInTheDocument();
    });
  
    it('Should match snapshot',()=>{
        const {queryByText}=render(<SplitButton selectedId={selectedId} items={items} />)
        expect(queryByText("Dropdown2")).toMatchSnapshot();
    });
})