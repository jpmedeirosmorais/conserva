import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Menu } from "./Menu";

export default {
  title: "Pages/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Menu",
};
