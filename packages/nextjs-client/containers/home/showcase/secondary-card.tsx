import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Typography } from "@digistore/react-components";

interface Options {
  color?: string;
}

function SecondaryCard({ color = "grey" }: Options) {
  return (
    <div
      className={cls.showcase__secondary_card}
      style={{ backgroundColor: color }}
    >
      <div className={cls.showcase__secondary_card__content}>
        <Typography variant="h3">Portable Music Speaker</Typography>
        <div>
          <Typography variant="body3" color="greyDark">
            Weekend Discount
          </Typography>
          <div className={cls.showcase__secondary_card__price}>
            <Typography variant="h3" color="primary">
              270PKR
            </Typography>
            <Typography variant="body3" color="greyDark">
              390PKR
            </Typography>
          </div>
        </div>
      </div>
      <div className={cls.showcase__secondary_card__image}>
        <LazyLoadImage
          src={"/thumbnail.png"}
          alt="Product Image"
          width={121}
          height={121}
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          effect="black-and-white"
          placeholderSrc="/thumbnail.png"
        />
      </div>
    </div>
  );
}

export default SecondaryCard;
