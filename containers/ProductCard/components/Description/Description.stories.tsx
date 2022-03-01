import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Description } from "./Description";

export default {
  title: "containers/ProductCard/Description",
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => (
  <Description {...args} />
);

export const Default = Template.bind({});

Default.args = {
  description:
    "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
};
