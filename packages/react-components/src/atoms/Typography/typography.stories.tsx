import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import Typography from "./typography";
import { TypographyOptions } from "./typography-types";

export const Default = (args: any) => <Typography {...args} />;
export const H1 = (args: any) => <Typography {...args} />;
export const H2 = (args: any) => <Typography {...args} />;
export const H3 = (args: any) => <Typography {...args} />;
export const Body1 = (args: any) => <Typography {...args} />;
export const Body2 = (args: any) => <Typography {...args} />;
export const Body3 = (args: any) => <Typography {...args} />;
export const Caption = (args: any) => <Typography {...args} />;

const controls = {
  children: {
    control: {
      type: "text",
    },
  },
  color: {
    control: "select",
    options: [
      "black",
      "white",
      "grey",
      "greyLight",
      "greyDark",
      "primary",
      "secondary",
    ],
  },
  className: {
    control: {
      type: "text",
    },
  },
};

H1.args = {
  children: "Hello I'm Text Variant H1",
  variant: "h1",
  color: "black",
} as TypographyOptions;
H1.argTypes = controls;

H2.args = {
  children: "Hello I'm Text Variant H2",
  variant: "h2",
  color: "black",
} as TypographyOptions;
H2.argTypes = controls;

H3.args = {
  children: "Hello I'm Text Variant H3",
  variant: "h3",
  color: "black",
} as TypographyOptions;
H3.argTypes = controls;

Body1.args = {
  children: "Hello I'm Text Variant Body1",
  variant: "body1",
  color: "black",
} as TypographyOptions;
Body1.argTypes = controls;

Body2.args = {
  children: "Hello I'm Text Variant Body2",
  variant: "body2",
  color: "black",
} as TypographyOptions;
Body2.argTypes = controls;

Body3.args = {
  children: "Hello I'm Text Variant Body3",
  variant: "body3",
  color: "black",
} as TypographyOptions;
Body3.argTypes = controls;

Caption.args = {
  children: "Hello I'm Text Variant Caption",
  variant: "caption",
  color: "black",
} as TypographyOptions;
Caption.argTypes = controls;

Default.args = {
  children: "Hello I'm Text Variant Default",
  color: "black",
} as TypographyOptions;
Default.argTypes = controls;

export default {
  title: "Atoms/Typography",
  decorators: [withA11y],
};
