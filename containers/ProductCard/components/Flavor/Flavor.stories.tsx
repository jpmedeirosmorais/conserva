import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Flavor } from "./Flavor";

export default {
  title: "containers/ProductCard/Flavor",
  component: Flavor,
} as ComponentMeta<typeof Flavor>;

const Template: ComponentStory<typeof Flavor> = (args) => <Flavor {...args} />;

export const Default = Template.bind({});

Default.args = {
  flavor: "Calabresa",
};
