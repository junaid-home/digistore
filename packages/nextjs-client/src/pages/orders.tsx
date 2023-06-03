import cls from "@digistore/scss/lib/pages/Orders.module.css";

import * as React from "react";

import { useQuery } from "@apollo/client";
import { Spinner } from "@digistore/react-components";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useQueryParam, StringParam } from "use-query-params";

import { SidebarWithLinksLayout } from "../components/layout";
import OrderCard from "../containers/orders/order-card";

import { selectAuthState } from "../store/auth-slice";

import { GET_USER_ORDERS } from "../graphql/order";

function Orders() {
  const alert = useAlert();
  const { token } = useSelector(selectAuthState);
  const [payment, setPayment] = useQueryParam("payment", StringParam);

  const { data, loading } = useQuery(GET_USER_ORDERS, {
    context: {
      headers: {
        authorization: token,
      },
    },
  });

  React.useEffect(() => {
    if (payment === "success") {
      alert.success("Order placed successfully!");
    }
    setPayment(null);
  }, [payment]);

  return (
    <SidebarWithLinksLayout>
      {loading && <Spinner overlay={false} />}
      <div style={{ minHeight: "50vh" }}>
        {data?.orders?.data?.length &&
          data.orders.data.map((order: any, index: number) => (
            <React.Fragment key={order.id}>
              <OrderCard order={order} />
              {data.orders.data.length > index + 1 && (
                <div className={cls.separator} />
              )}
            </React.Fragment>
          ))}
      </div>
    </SidebarWithLinksLayout>
  );
}

export default Orders;
