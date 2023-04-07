import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import LinesEllipsis from "react-lines-ellipsis";

import { Button, Typography } from "@digistore/react-components";

import { OrderItemType } from "../types";

function ListItem({ order }: { order: OrderItemType }) {
  const { product, quantity, size, color } = order;

  return (
    <div className={cls.order_item}>
      <div className={cls.order_item_content}>
        <Image
          src={product.imgSrc}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className={cls.order_item_content_details}>
          <div className={cls.order_item_content_details_title}>
            <Link href={`/product/${product.slug}`}>
              <LinesEllipsis
                text={product.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </Link>
          </div>
          <div className="tm-sm">
            <Typography variant="body3">
              Size: &nbsp;
              <span className={cls.order_item_light_text}>{size}</span>
            </Typography>
          </div>
          <div className="tm-sm">
            <Typography variant="body3">
              Color: &nbsp;
              <span className={cls.order_item_light_text}>{color}</span>
            </Typography>
          </div>
          <div className="tm-sm">
            <Typography variant="h3">
              Quantity:
              <span className={cls.order_item_light_text}>
                &nbsp;x{quantity}
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div className={cls.order_item_cto}>
        <div className="bm-sm">
          <Typography variant="h3">Price: {product.price}PKR</Typography>
        </div>
        <Button color="primary">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ListItem;
