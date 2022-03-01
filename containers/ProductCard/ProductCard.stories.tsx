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
  products: [
    {
      id: 1,
      flavor: "Calabresa",
      type: "Pizza",
      price: "R$ 19,90",
      image: "https://picsum.photos/id/1/200/300",
      description: "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
    },
    {
      id: 2,
      flavor: "Portuguesa",
      type: "Pizza",
      price: "R$ 19,90",
      image: "https://picsum.photos/id/2/200/300",
      description: "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
    },
    {
      id: 3,
      flavor: "Marguerita",
      type: "Pizza",
      price: "R$ 19,90",
      image: "https://picsum.photos/id/3/200/300",
      description: "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
    },
    {
      id: 4,
      flavor: "Calabresa",
      type: "Pizza",
      price: "R$ 19,90",
      image: "https://picsum.photos/id/4/200/300",
      description: "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano.",
    },
  ],
};
