import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import { SidebarWithLinksLayout } from "../components/layout";
import OrderCard from "../containers/orders/order-card";

function Orders() {
  return (
    <SidebarWithLinksLayout>
      <OrderCard />
      <div className={cls.separator} />
      <OrderCard />
    </SidebarWithLinksLayout>
  );
}

export default Orders;
