import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "../components";

export default {
  title: "components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: ["Home", "About", "Contact"],
};
