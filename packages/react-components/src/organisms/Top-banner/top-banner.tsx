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

  console.log(lang, currency);

  return (
    <div className={cls.wrapper}>
      <div className="container center">
        <div className={cls.center_align}>
          <ShopIcon />
          <Typography className="lm-sm" variant="body2" color="greyDark">
            {headline}
          </Typography>
        </div>
        <div className={cls.center_align}>
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
