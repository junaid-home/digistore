import cls from "@digistore/scss/lib/pages/Search.module.css";

import * as React from "react";

import Image from "next/image";

import { Typography, Button, Input, icons } from "@digistore/react-components";

import { useQueryParam, StringParam } from "use-query-params";

function Sidebar({
  categories,
  onPriceFilterSubmit: onSubmit,
}: SidebarOptions) {
  const [min, setMin] = React.useState("");
  const [max, setMax] = React.useState("");
  const [, setCategory] = useQueryParam("category", StringParam);

  const onPriceFilterSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit(min, max);
  };

  const { FilterIcon } = icons;

  return (
    <React.Fragment>
      <div className={cls.filter_headline}>
        <FilterIcon />
        <Typography variant="h3">&nbsp;&nbsp;Filter Results</Typography>
      </div>
      <aside className={cls.sidebar}>
        <div className={cls.sidebar_categories}>
          <Typography variant="h3">Category</Typography>
          <div className={cls.sidebar_categories_list}>
            {categories.map((cat) => (
              <span
                onClick={() => setCategory(cat.value)}
                className={cls.sidebar_categories_list_item}
              >
                <Typography variant="body2">{cat.label}</Typography>
              </span>
            ))}
          </div>
        </div>
        <div className={cls.sidebar_price}>
          <span className={cls.sidebar_price_title}>
            <Typography variant="h3">Price</Typography>
          </span>
          <form
            onSubmit={onPriceFilterSubmit}
            className={cls.sidebar_price_form}
          >
            <span style={{ flex: 1 }} className="rm-md">
              <Input
                value={min}
                onChange={(e) => setMin(e.target.value)}
                fullWidth
                placeholder="Min Price"
              />
            </span>
            <span>-</span>
            <span style={{ flex: 1 }} className="lm-md">
              <Input
                value={max}
                onChange={(e) => setMax(e.target.value)}
                fullWidth
                placeholder="Max Price"
              />
            </span>
            <div className="lm-lg">
              <Button
                type="submit"
                className={cls.sidebar_button}
                color="primary"
              >
                ▷
              </Button>
            </div>
          </form>
        </div>
        <div className={cls.sidebar_qr}>
          <Image
            priority
            src="/qr.png"
            alt="QR Code"
            width={230}
            height={230}
          />
        </div>
      </aside>
    </React.Fragment>
  );
}

interface CategoryType {
  id: string;
  value: string;
  label: string;
}

interface SidebarOptions {
  categories: CategoryType[];
  onPriceFilterSubmit: (min: string, max: string) => void;
}

export default Sidebar;
