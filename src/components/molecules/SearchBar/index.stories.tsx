import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import SearchBar,{SearchBarProps} from ".";

const SearchStory={
    title:"Molecules/SearchBar",
    component:SearchBar,
};

const Template: Story<ComponentProps<typeof SearchBar>>=(args:SearchBarProps)=>
    <SearchBar {...args} />;

export const SearchField = Template.bind({});
SearchField.args={
    placeholder:'Search',
    // handleChange:action('Search value changed'),
};

export default SearchStory;