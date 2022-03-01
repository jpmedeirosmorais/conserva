import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  medias: [
    {
      name: "F",
      icon: "../../common/assets/icons/facebook",
      link: "https://facebook.com",
    },
    {
      name: "I",
      icon: "/static/images/instagram.svg",
      link: "https://instagram.com",
    },
    {
      name: "T",
      icon: "/static/images/twitter.svg",
      link: "https://twitter.com",
    },
  ],
};
