import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

import { SidebarWithLinksLayout } from "../components/layout";
import OrderCard from "../containers/orders/order-card";

import { selectAuthState } from "../store/auth-slice";

import { GET_USER_ORDERS } from "../graphql/order";

function Orders() {
  const { token } = useSelector(selectAuthState);

  const { data } = useQuery(GET_USER_ORDERS, {
    context: {
      headers: {
        authorization: token,
      },
    },
  });

  return (
    <SidebarWithLinksLayout>
      {data?.orders?.data?.length &&
        data.orders.data.map((order: any, index: number) => (
          <React.Fragment key={order.id}>
            <OrderCard order={order} />
            {data.orders.data.length > index + 1 && (
              <div className={cls.separator} />
            )}
          </React.Fragment>
        ))}
    </SidebarWithLinksLayout>
  );
}

export default Orders;
