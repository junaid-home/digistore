import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import TopBanner from "./top-banner";

export const Default = (args: any) => <TopBanner {...args} />;

Default.argTypes = {
  headline: {
    control: {
      type: "text",
    },
  },
};

Default.args = {
  headline: "50% off on new Item(s)",
};

export default {
  title: "Organisms/Top Banner",
  decorators: [withA11y],
};
