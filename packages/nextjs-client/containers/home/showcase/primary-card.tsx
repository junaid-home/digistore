import "react-lazy-load-image-component/src/effects/black-and-white.css";
import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Typography } from "@digistore/react-components";

function PrimaryCard() {
  return (
    <div className={cls.showcase__primary_card}>
      <div className={cls.showcase__primary_card__content}>
        <Typography variant="caption" color="primary">
          NEW YEAR SALE UPTO 10%
        </Typography>
        <Typography variant="h1" className="tm-sm">
          New Macbook Pro 2022
        </Typography>
        <Typography variant="body3" color="greyDark" className="tm-sm">
          MacBook Pro 14” and 16” laptops feature incredible performance with
          the M1 Pro or M1 Max chip, amazing battery life, and a Liquid Retina
          XDR display.
        </Typography>
        <Button className="tm-lg" color="secondary">
          SHOP NOW
        </Button>
      </div>
      <div className={cls.showcase__primary_card__image}>
        <LazyLoadImage
          src={"/thumbnail.png"}
          alt="Product Image"
          width={245}
          height={180}
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          effect="black-and-white"
          placeholderSrc="/thumbnail.png"
        />
      </div>
    </div>
  );
}

export default PrimaryCard;
