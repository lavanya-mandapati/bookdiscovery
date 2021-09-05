import React from "react";
import { render} from "@testing-library/react";
import BookDiscover from './DiscoverBooksImage'


describe("Topics renders correctly",()=>
{
    test("should match shapshot",()=>{
    const{asFragment}=render(<BookDiscover />);
    expect(asFragment()).toMatchSnapshot()

    })
})