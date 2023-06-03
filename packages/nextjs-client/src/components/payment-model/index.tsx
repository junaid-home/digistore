import cls from "@digistore/scss/lib/templates/Payment-model.module.css";

import * as React from "react";

import Modal from "react-responsive-modal";
import { Button, Typography, icons } from "@digistore/react-components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartState } from "../../store/cart-slice";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { SAVE_ORDER_WITH_COD } from "../../graphql/order";
import { selectAuthState } from "../../store/auth-slice";

const { PaymentCardIcon, CODIcon } = icons;

function PaymentModel({ open, setOpen }: PaymentModelProps) {
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useDispatch();

  const [checkingOut, setCheckingOut] = React.useState(false);

  const { token } = useSelector(selectAuthState);
  const { items } = useSelector(selectCartState);
  const [saveOrder, { loading }] = useMutation(SAVE_ORDER_WITH_COD);

  const handleCODPayment = async () => {
    const orderItems = items.map((item) => ({
      id: item.id,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
      selling_price: item.selling_price,
    }));

    const { data } = await saveOrder({
      variables: { items: orderItems },
      context: {
        headers: {
          authorization: token,
        },
      },
    });

    if (data?.createOrder?.status === "success") {
      dispatch(clearCart(null));
      router.push("/orders");
      alert.success("Your Order is placed successfully!");
    }
  };

  const handleCardPayment = async () => {
    setCheckingOut(true);

    const orderItems = items.map((item) => ({
      color: item.color,
      product: item.id,
      size: item.size,
      quantity: item.quantity,
    }));

    const response = await fetch("http://localhost:4000/checkout-stripe", {
      method: "POST",
      body: JSON.stringify({ items: orderItems }),
      headers: {
        Authorization: token as string,
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();

    if (jsonData?.url) {
      dispatch(clearCart(null));
      window.location.href = jsonData.url;
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      styles={{
        modal: { minWidth: 400, outline: "solid", padding: 0 },
      }}
    >
      <div className={cls.container}>
        <Typography variant="h3">How You would like to pay?</Typography>
      </div>
      <div className={cls.btn_cto}>
        <Button
          loadingText="Checking out..."
          isLoading={checkingOut}
          isDisabled={checkingOut}
          onClick={handleCardPayment}
          color="secondary"
          fullWidth
        >
          <PaymentCardIcon /> Pay With Card
        </Button>
        <Button
          isDisabled={loading}
          isLoading={loading}
          loadingText="Saving Order..."
          onClick={handleCODPayment}
          color="primary"
          fullWidth
        >
          <CODIcon /> Cash on Delivery
        </Button>
      </div>
    </Modal>
  );
}

interface PaymentModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default PaymentModel;
