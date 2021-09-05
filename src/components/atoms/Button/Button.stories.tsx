import React from "react";
import CustomButton from "./Button";

export default {
  title: "atoms/Button",
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "Discover",
  color: "primary",
  variant: "contained",
};

export const Secondary = Template.bind({});

Secondary.args = {
  name: "Reply",
  color: "primary",
  variant: "outlined",
};
