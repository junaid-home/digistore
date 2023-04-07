import cls from "@digistore/scss/lib/molecules/Avatar.module.css";

import * as React from "react";

import { UserIcon } from "../../atoms/Icons";

import StackedText from "../Stacked-text/stacked-text";

function Avatar({ user, onClick }: { user?: object; onClick?: () => void }) {
  return (
    <div className={cls.wrapper} onClick={onClick}>
      <UserIcon />
      <StackedText className="lm-sm" label="Sign In" value="Account" />
    </div>
  );
}

export default Avatar;
