import cls from "@digistore/scss/lib/organisms/Header.module.css";

import * as React from "react";

import { LogoIcon, CartIcon, LikeIcon } from "../../atoms/Icons";

import { SearchBar, StackedText, Avatar } from "../../molecules";

import { HeaderOptions } from "./header-types";

function Header({ categories, onSearchQuerySubmit }: HeaderOptions) {
  return (
    <div className={cls.wrapper}>
      <div className="container center">
        <div className={cls.sidebar}>
          <LogoIcon />
        </div>
        <div className={cls.main_area}>
          <div className="center">
            <div>
              <SearchBar
                categories={categories}
                onSearchQuerySubmit={onSearchQuerySubmit}
              />
            </div>
            <div className={cls.right_align}>
              <Avatar />
              <CartIcon totalCount={12} className="lm-xl" />
              <LikeIcon totalCount={9} className="lm-xl" />
              <StackedText className="lm-xl" label="Total" value="1000PKR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
