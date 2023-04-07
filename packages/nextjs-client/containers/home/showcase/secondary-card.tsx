import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Typography } from "@digistore/react-components";

import { ProductType } from "../types";
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
        <Link href={`/product/${product.id}`}>
          <Typography variant="h3">{product.title}</Typography>
        </Link>
        <div>
          <Typography variant="body3" color="greyDark">
            Weekend Discount
          </Typography>
          <div className={cls.showcase__secondary_card__price}>
            <Typography variant="h3" color="primary">
              {product.discountedPrice}PKR
            </Typography>
            <Typography variant="body3" color="greyDark">
              {product.price}PKR
            </Typography>
          </div>
        </div>
      </div>
      <div className={cls.showcase__secondary_card__image}>
        <LazyLoadImage
          src={product.imgSrc}
          alt={product.title}
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
