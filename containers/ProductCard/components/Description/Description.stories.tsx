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
    "Pizza Calabresa – É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A linguiça calabresa agrega um sabor único e levemente picante à pizza. Além do aroma irresistível e ingredientes selecionados, tem o molho preparado com tomates frescos, sem conservantes, que é saboroso e muito equilibrado. A massa deliciosa e macia e a borda crocante complementam a nossa versão da pizza de Calabresa. Não leva cebolas, mas pode ser acebolada, caso seja a preferência do cliente.",
};
