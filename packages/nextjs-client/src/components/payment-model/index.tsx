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

  const { token } = useSelector(selectAuthState);
  const { items } = useSelector(selectCartState);
  const [saveOrder, { loading }] = useMutation(SAVE_ORDER_WITH_COD);

  const handleCOD = async () => {
    setOpen(false);

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
        <Button color="secondary" fullWidth>
          <PaymentCardIcon /> Pay With Card
        </Button>
        <Button
          isDisabled={loading}
          isLoading={loading}
          loadingText="Saving Order..."
          onClick={handleCOD}
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
