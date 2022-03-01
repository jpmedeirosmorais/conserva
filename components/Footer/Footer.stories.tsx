import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "./Footer";
import { IconFacebook, IconInstagram } from "../../common/assets/icons";

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
      icon: <IconFacebook />,
      link: "https://facebook.com",
    },
    {
      name: "I",
      icon: <IconInstagram />,
      link: "https://instagram.com",
    },
  ],
};
