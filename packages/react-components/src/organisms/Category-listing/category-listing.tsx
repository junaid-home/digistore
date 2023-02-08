import cls from "@digistore/scss/lib/organisms/Category-listings.module.css";

import * as React from "react";

import { Typography } from "../../atoms";

import { MenuIcon, ArrowDownIcon } from "../../atoms/Icons";

interface Options {
  categories: {
    value: string;
    label: string;
  }[];
}

function CategoryListing({ categories }: Options) {
  return (
    <div className={cls.container}>
      <div className={cls.label}>
        <Typography
          variant="body2"
          className="m-lg center-vertical"
          color="white"
        >
          <MenuIcon color="white" className={cls.menu} /> Browse Categories
        </Typography>
      </div>
      <div className={cls.item_container}>
        {categories.map((cat) => (
          <div className={cls.item}>
            <Typography variant="body3" color="greyDark">
              {cat.label}
            </Typography>
            <ArrowDownIcon className={cls.rotate} color="#a1a1a1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryListing;
