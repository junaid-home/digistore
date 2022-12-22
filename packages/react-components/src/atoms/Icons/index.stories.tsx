import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import {
  ArrowDownIcon,
  LogoIcon,
  ShopIcon,
  SearchIcon,
  LikeIcon,
  CartIcon,
  UserIcon,
  MenuIcon,
} from "./index";

export const Logo = (args: any) => <LogoIcon {...args} />;
export const Shop = (args: any) => <ShopIcon {...args} />;
export const ArrowDown = (args: any) => <ArrowDownIcon {...args} />;
export const Search = (args: any) => <SearchIcon {...args} />;
export const User = (args: any) => <UserIcon {...args} />;
export const Menu = (args: any) => <MenuIcon {...args} />;
export const Like = (args: any) => <LikeIcon totalCount={10} {...args} />;
export const Cart = (args: any) => <CartIcon totalCount={0} {...args} />;

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

Search.argTypes = {
  color: {
    control: {
      type: "text",
    },
  },
};
Search.args = {
  color: "#333",
};

export default {
  title: "Atoms/Icons",
  decorators: [withA11y],
};
