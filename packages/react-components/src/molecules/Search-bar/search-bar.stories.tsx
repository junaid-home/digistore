import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import SearchBar from "./search-bar";

export const Default = (args: any) => <SearchBar {...args} />;

Default.argTypes = {
  categories: {
    control: {
      type: "array",
    },
  },
};

Default.args = {
  categories: [
    { value: "all", label: "All Categories" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
  ],
  onSearchQuerySubmit: (value: string, category: string) => {
    console.log(`category: ${category}\tvalue: ${value}`);
  },
};

export default {
  title: "Molecules/Search Bar",
  decorators: [withA11y],
};
