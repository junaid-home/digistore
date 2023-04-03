import cls from "@digistore/scss/lib/organisms/Top-banner.module.css";

import * as React from "react";

import { Typography } from "../../atoms";
import { ShopIcon } from "../../atoms/Icons";

import DropDown from "./dropdown";

const langOpts = [
  { value: "eng", label: "English" },
  { value: "urdu", label: "اردو" },
];

const currencyOpts = [
  { value: "PKR", label: "PKR" },
  { value: "USD", label: "USD" },
];

function TopBanner({ headline }: { headline: string }) {
  const [currency, setCurrency] = React.useState(currencyOpts[0]);
  const [lang, setLang] = React.useState(langOpts[0]);

  return (
    <div className={cls.wrapper}>
      <div className="container center">
        <div className="center-vertical">
          <ShopIcon />
          <span className={cls.headline}>
            <Typography className="lm-sm" variant="body2" color="greyDark">
              {headline}
            </Typography>
          </span>
        </div>
        <div className="center-vertical">
          <DropDown
            placeholder="English"
            options={langOpts}
            defaultValue={lang}
            onChange={setLang}
          />
          <DropDown
            className="lm-md"
            placeholder="PKR"
            options={currencyOpts}
            defaultValue={currency}
            onChange={setCurrency}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
