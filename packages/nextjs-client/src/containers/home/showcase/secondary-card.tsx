import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Typography } from "@digistore/react-components";

import { ProductType } from "../../../pages/index";
import Link from "next/link";

interface Options {
  color?: string;
  product: ProductType;
}

function SecondaryCard({ color = "grey", product }: Options) {
  return (
    <div
      className={cls.showcase__secondary_card}
      style={{ backgroundColor: color }}
    >
      <div className={cls.showcase__secondary_card__content}>
        <Link href={`/product/${product.slug}`}>
          <Typography variant="h3">{product.name}</Typography>
        </Link>
        <div>
          <Typography variant="body3" color="greyDark">
            Weekend Discount
          </Typography>
          <div className={cls.showcase__secondary_card__price}>
            <Typography variant="h3" color="primary">
              {product.selling_price}PKR
            </Typography>
            <Typography variant="body3" color="greyDark">
              {product.market_price}PKR
            </Typography>
          </div>
        </div>
      </div>
      <div className={cls.showcase__secondary_card__image}>
        <LazyLoadImage
          src={product.thumbnail}
          alt={product.name}
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
