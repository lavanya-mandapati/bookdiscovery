import React from 'react';
import CustomButton from './Button';

export default {
    title: 'atoms/Button',
    component: CustomButton
};

const TemplateA = (args) => <CustomButton name="Start Your Journey" />;

const TemplateB = (args) => <CustomButton name="Reply" />;

export const Primary = TemplateA.bind({});

export const Basic = TemplateB.bind({});

Basic.args = {
    variant: "outlined",
};

Primary.args = {
    color: "primary",
    variant: "contained",
};
