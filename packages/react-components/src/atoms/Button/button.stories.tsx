import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import Button from "./button";
import { ButtonOptions } from "./button-types";

export const Default = (args: any) => <Button {...args} />;

Default.args = {
  children: "SHOP NOW",
  isLoading: false,
  fullWidth: false,
  isActive: false,
  isDisabled: false,
  loadingText: "loading...",
  spinnerPlacement: "start",
  color: "secondary",
} as ButtonOptions;

Default.argTypes = {
  children: {
    control: {
      type: "text",
    },
  },
  isLoading: {
    control: {
      type: "boolean",
    },
  },
  fullWidth: {
    control: {
      type: "boolean",
    },
  },
  isActive: {
    control: {
      type: "boolean",
    },
  },
  isDisabled: {
    control: {
      type: "boolean",
    },
  },
  loadingText: {
    control: {
      type: "text",
    },
  },
  spinnerPlacement: {
    control: "select",
    options: ["start", "end"],
  },
  color: {
    control: "select",
    options: ["primary", "secondary"],
  },
  type: {
    control: "select",
    options: ["button", "reset", "submit"],
  },
};

export default {
  title: "Atoms/Button",
  decorators: [withA11y],
};
