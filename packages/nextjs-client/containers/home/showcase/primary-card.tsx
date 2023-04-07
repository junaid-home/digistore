import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import Link from "next/link";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Typography } from "@digistore/react-components";

import { ProductType } from "../types";

function PrimaryCard({ product }: { product: ProductType }) {
  return (
    <div className={cls.showcase__primary_card}>
      <div className={cls.showcase__primary_card__content}>
        <Typography variant="caption" color="primary">
          NEW YEAR SALE UPTO 10%
        </Typography>
        <Link
          href={`/product/${product.id}`}
          className={cls.showcase__primary_card__content_link}
        >
          <Typography variant="h1" className="tm-sm">
            {product.title}
          </Typography>
        </Link>
        <Typography variant="body3" color="greyDark" className="tm-sm">
          {product.summary}
        </Typography>
        <Button className="tm-lg" color="secondary">
          SHOP NOW
        </Button>
      </div>
      <div className={cls.showcase__primary_card__image}>
        <LazyLoadImage
          src={product.imgSrc}
          alt={product.title}
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
