import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Price } from "./Price";

export default {
  title: "containers/ProductCard/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Default = Template.bind({});

Default.args = {
  price: "R$ 19,90",
};
