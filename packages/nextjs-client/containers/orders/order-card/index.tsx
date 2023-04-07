import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import ListItem from "./list-item";

import { Typography } from "@digistore/react-components";
import { OrderType } from "../types";

function OrderCard({ order }: { order: OrderType }) {
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
        {order.items.map((order) => (
          <ListItem order={order} />
        ))}
      </div>
      <div className={cls.order_total}>
        <Typography variant="h3">
          Total Amount: <span>{order.total}PKR</span>
        </Typography>
      </div>
    </div>
  );
}

export default OrderCard;
