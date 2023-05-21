import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import LinesEllipsis from "react-lines-ellipsis";

import { Button, Typography } from "@digistore/react-components";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { addToCart, selectCartState } from "../../../store/cart-slice";

function ListItem({ order }: { order: any }) {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { items } = useSelector(selectCartState);

  const { product, quantity, size, color } = order;

  const handlerAddToCart = () => {
    const itemIndex = items.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      dispatch(
        addToCart({
          id: product.id,
          thumbnail: product.thumbnail,
          name: product.name,
          selling_price: product.selling_price,
          size,
          color,
          quantity: 1,
        })
      );

      alert.success("Product Added To The Cart!");
    } else {
      alert.info("Product is Already in the Cart!");
    }
  };

  return (
    <div className={cls.order_item}>
      <div className={cls.order_item_content}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className={cls.order_item_content_details}>
          <div className={cls.order_item_content_details_title}>
            <Link href={`/product/${product.slug}`}>
              <LinesEllipsis
                text={product.name}
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
          <Typography variant="h3">
            Price: {product.selling_price}PKR
          </Typography>
        </div>
        <Button onClick={handlerAddToCart} color="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
