import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import Image from "next/image";

import { Button, Typography } from "@digistore/react-components";
import LinesEllipsis from "react-lines-ellipsis";

const order = {
  status: "Pending",
  id: "dafj-oe123dj-falfo-4355",
  date: "25 March 2023",
  total: "580PKR",
  items: [
    {
      title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
      imgSrc: "/assets/1.jpg",
      purchasedPrice: "230PKR",
      size: "Large",
      color: "orange",
      quantity: 1,
    },
    {
      title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
      imgSrc: "/assets/2.jpg",
      purchasedPrice: "230PKR",
      size: "Large",
      color: "orange",
      quantity: 2,
    },
  ],
};

type orderType = typeof order.items[0];

function OrderItem({ order }: { order: orderType }) {
  return (
    <div className={cls.order_item}>
      <div className={cls.order_item_content}>
        <Image src={order.imgSrc} alt={order.title} width={100} height={100} />
        <div className={cls.order_item_content_details}>
          <LinesEllipsis
            text={order.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <div className="tm-sm">
            <Typography variant="body3">
              Size: &nbsp;
              <span className={cls.order_item_light_text}>{order.size}</span>
            </Typography>
          </div>
          <div className="tm-sm">
            <Typography variant="body3">
              Color: &nbsp;
              <span className={cls.order_item_light_text}>{order.color}</span>
            </Typography>
          </div>
          <div className="tm-sm">
            <Typography variant="h3">
              Quantity:
              <span className={cls.order_item_light_text}>
                &nbsp;x{order.quantity}
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div className={cls.order_item_cto}>
        <div className="bm-sm">
          <Typography variant="h3">Price: {order.purchasedPrice}</Typography>
        </div>
        <Button color="primary">Add to Cart</Button>
      </div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className={cls.order}>
      <div className={cls.order_header}>
        <Typography variant="h3">{order.status}</Typography>
        <span>
          <Typography variant="body3">Order Date: {order.date}</Typography>
          <Typography variant="body3">Order Id: {order.id}</Typography>
        </span>
      </div>
      <div className={cls.order_items}>
        {order.items.map((ord) => (
          <OrderItem order={ord} />
        ))}
      </div>
      <div className={cls.order_total}>
        <Typography variant="h3">
          Total Amount: <span>{order.total}</span>
        </Typography>
      </div>
    </div>
  );
}

export default OrderCard;
