import React from "react";
import Button from "./Button";

export default {
	title: "DesignSystem/Atoms/Buttons",
	component: Button,
};

const Template = (args) => <Button {...args}>Click me</Button>;

export const Primary = Template.bind({});
Primary.args = {
	activeColor: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	activeColor: "secondary",
};
