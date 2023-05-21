import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import ListItem from "./list-item";

import { Typography } from "@digistore/react-components";

function OrderCard({ order }: { order: any }) {
  const total =
    200 +
    order.items.reduce(
      (sum: any, item: any) =>
        (sum += item.product.selling_price * item.quantity),
      0
    );

  return (
    <div className={cls.order}>
      <div className={cls.order_header}>
        <Typography variant="h3">{order.status}</Typography>
        <span>
          <Typography variant="body3">Order Id: {order.id}</Typography>
          <Typography variant="body3">
            Payment Method: {order.payment.method}
          </Typography>
        </span>
      </div>
      <div className={cls.order_items}>
        {order.items.map((order: any) => (
          <ListItem key={order.id} order={order} />
        ))}
      </div>
      <div className={cls.order_total}>
        <Typography variant="h3">
          Total Amount: <span>{total}PKR</span>
        </Typography>
      </div>
    </div>
  );
}

export default OrderCard;
