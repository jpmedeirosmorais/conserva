import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DemoImage } from "./DemoImage";

export default {
  title: "containers/ProductCard/DemoImage",
  component: DemoImage,
} as ComponentMeta<typeof DemoImage>;

const Template: ComponentStory<typeof DemoImage> = (args) => (
  <DemoImage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/id/1/200/300",
};
