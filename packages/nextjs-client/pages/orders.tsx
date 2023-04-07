import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import { SidebarWithLinksLayout } from "../components/layout";

import OrderCard from "../containers/orders/order-card";

const orders = Array.from({ length: 3 }, (_, index) => ({
  status: "Pending",
  id: JSON.stringify(index + 1),
  date: "25 March 2023",
  total: 580,
  items: [
    {
      product: {
        id: "1",
        title: "New Macbook Pro 2022",
        summary: `MacBook Pro 14” and 16” laptops feature incredible performance with
  the M1 Pro or M1 Max chip, amazing battery life, and a Liquid Retina
  XDR display.`,
        slug: "abc",
        imgSrc: "/assets/product.png",
        discountedPrice: 120,
        price: 230,
        ratings: 4.6,
      },
      size: "medium",
      color: "Orange",
      quantity: 1,
    },
    {
      product: {
        id: "2",
        title: "New Macbook Pro 2022",
        summary: `MacBook Pro 14” and 16” laptops feature incredible performance with
  the M1 Pro or M1 Max chip, amazing battery life, and a Liquid Retina
  XDR display.`,
        slug: "123",
        imgSrc: "/assets/product.png",
        discountedPrice: 120,
        price: 230,
        ratings: 4.6,
      },
      size: "large",
      color: "Grey",
      quantity: 2,
    },
  ],
}));

function Orders() {
  return (
    <SidebarWithLinksLayout>
      {orders.map((order, index) => (
        <React.Fragment>
          <OrderCard order={order} />
          {orders.length > index + 1 && <div className={cls.separator} />}
        </React.Fragment>
      ))}
    </SidebarWithLinksLayout>
  );
}

export default Orders;
