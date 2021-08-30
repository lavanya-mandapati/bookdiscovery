import {render} from "@testing-library/react";
import Avatar from ".";

describe("Avatar test",()=>{
    it("should render letter",()=>{
        const {container}=render(<Avatar  letter="R" />)
        expect(container.firstChild).toBeTruthy();
    });


    it("should match the snapshot",()=>{
        const wrapper=render(<Avatar  letter="R" />)
        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("R")).toBeInTheDocument();
    });

    it("should render image",()=>{
        const {container}=render(<Avatar  image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />)
        expect(container.firstChild).toBeTruthy();
    })

    it("should match the snapshot",()=>{
        const {container}=render(<Avatar  image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />)
        expect(container.firstChild).toMatchSnapshot();    
    })
})