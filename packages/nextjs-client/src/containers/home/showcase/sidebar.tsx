import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import Link from "next/link";

import { Typography, icons } from "@digistore/react-components";
import { CategoryType } from "../types";

const { MenuIcon, ArrowDownIcon } = icons;

function Sidebar({ categories }: Options) {
  return (
    <div className={cls.showcase_categories}>
      <div className={cls.showcase_categories_label}>
        <Typography
          variant="body2"
          className="m-lg center-vertical"
          color="white"
        >
          <MenuIcon color="white" className={cls.showcase_categories_menu} />{" "}
          Browse Categories
        </Typography>
      </div>
      <div className={cls.showcase_categories_items}>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/search?category=${cat.slug}`}>
            <div className={cls.showcase_categories_item} key={cat.id}>
              <Typography variant="body3" color="greyDark">
                {cat.name}
              </Typography>
              <ArrowDownIcon
                className={cls.showcase_categories_item_arrow}
                color="#a1a1a1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface Options {
  categories: CategoryType[];
}

export default Sidebar;
