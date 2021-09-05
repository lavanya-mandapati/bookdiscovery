import React from 'react';
import CustomButton from './Button';

export default {
    title: 'atoms/Button',
    component: CustomButton
};

const Template = (args) => <CustomButton {...args} />
 
export const Primary = Template.bind({});

Primary.args = {
    name: "Next",
    color: "primary",
    variant: "contained",
}