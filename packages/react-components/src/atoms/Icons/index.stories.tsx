import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import LogoIcon from "./logo";

export const Logo = (args: any) => <LogoIcon {...args} />;

export default {
  title: "Atoms/Icons",
  decorators: [withA11y],
};
