import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import InputField,{InputFieldProps} from ".";

const InputStory={
    title:"Atoms/Input",
    component:InputField,
};

const Template: Story<ComponentProps<typeof InputField>>=(args:InputFieldProps)=>
    <InputField {...args} />;

export const Input = Template.bind({});
Input.args={
    placeholder:'InputField',
    onChange:action('Input changed'),
};

export default InputStory;