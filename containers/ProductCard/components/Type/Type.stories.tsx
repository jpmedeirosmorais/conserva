import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Type } from "./Type";

export default {
  title: "containers/ProductCard/Type",
  component: Type,
} as ComponentMeta<typeof Type>;

const Template: ComponentStory<typeof Type> = (args) => <Type {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "PIZZA",
};
