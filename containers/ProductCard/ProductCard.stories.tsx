import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProductCard } from "./ProductCard";

export default {
  title: "containers/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  product: {
    id: 1,
    flavor: "Calabresa",
    type: "pizza",
    price: "R$ 19,90",
    image: "https://picsum.photos/id/1/200/300",
    description:
      "É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
  },
};
