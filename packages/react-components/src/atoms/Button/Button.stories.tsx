import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  decorators: [withA11y],
};

export const Default = () => <Button label="Button Text" />;
export const Primary = () => <Button label="Button Text" />;
