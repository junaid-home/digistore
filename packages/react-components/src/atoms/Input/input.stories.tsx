import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import Input from "./input";
import { InputOptions } from "./input-types";

export const Default = (args: any) => <Input {...args} />;

Default.argTypes = {
  placeholder: {
    control: {
      type: "text",
    },
  },
  fullWidth: {
    control: {
      type: "boolean",
    },
  },
};

Default.args = {
  placeholder: "Search for Products...",
  fullWidth: false,
} as InputOptions & HTMLInputElement;

export default {
  title: "Atoms/Input",
  decorators: [withA11y],
};
