import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import { ArrowDownIcon, LogoIcon, ShopIcon } from "./index";

export const Logo = (args: any) => <LogoIcon {...args} />;
export const Shop = (args: any) => <ShopIcon {...args} />;
export const ArrowDown = (args: any) => <ArrowDownIcon {...args} />;

ArrowDown.argTypes = {
  color: {
    control: {
      type: "text",
    },
  },
};

ArrowDown.args = {
  color: "#333",
};

export default {
  title: "Atoms/Icons",
  decorators: [withA11y],
};
