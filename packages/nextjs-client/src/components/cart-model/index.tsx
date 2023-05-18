import cls from "@digistore/scss/lib/templates/Cart-model.module.css";

import * as React from "react";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import Modal from "react-responsive-modal";
import {
  Typography,
  Button,
  QuantityCounter,
} from "@digistore/react-components";

import {
  clearCart,
  selectCartState,
  updateCartItemQuantity,
} from "../../store/cart-slice";

function CartItem({ data }: { data: any }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(data.quantity);

  React.useEffect(() => {
    dispatch(updateCartItemQuantity({ id: data.id, quantity }));
  }, [quantity]);

  return (
    <div className={cls.cart_item}>
      <div className={cls.cart_item_desc}>
        <Image
          className="rm-sm"
          src={data.thumbnail}
          alt={data.name}
          width={70}
          height={70}
        />
        <div>
          <LinesEllipsis
            text={data.name}
            maxLine={1}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <Typography className="tm-sm" color="greyDark" variant="body2">
            Size: {data.size}
          </Typography>
          <Typography className="tm-sm" color="greyDark" variant="body2">
            Color: {data.color}
          </Typography>
          <div className={cls.cart_item_mobile}>
            <div className={cls.cart_item_mobile_price}>
              <Typography className="tm-sm" color="black" variant="h3">
                {data.selling_price}PKR
              </Typography>
            </div>
            <div className={cls.cart_item_mobile_quantity}>
              <QuantityCounter count={quantity} onChange={setQuantity} />
            </div>
          </div>
        </div>
      </div>
      <div className={cls.cart_item_quantity}>
        <QuantityCounter count={quantity} onChange={setQuantity} />
      </div>
      <div className={cls.cart_item_price}>
        <Typography color="primary" variant="h3">
          {data.selling_price}PKR
        </Typography>
      </div>
    </div>
  );
}

function CartModel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items } = useSelector(selectCartState);
  const dispatch = useDispatch();

  const shipping_charges = 200;
  const sub_total = items.reduce(
    (partial, item) => (partial += item.selling_price * item.quantity),
    0
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      styles={{
        modal: { maxWidth: 900, outline: "solid", padding: 0 },
      }}
    >
      <div className={cls.container}>
        <Typography variant="h3">Shopping Cart</Typography>
      </div>
      <div>
        {items.map((item) => (
          <CartItem data={item} />
        ))}
      </div>
      <div className={cls.summary}>
        <div className={cls.summary_item}>
          <Typography color="greyDark" variant="body2">
            Sub Total &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant="h3">{sub_total}PKR</Typography>
        </div>
        <div className={cls.summary_item}>
          <Typography color="greyDark" variant="body2">
            Shipping Charge &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography color="greyDark" variant="body2">
            {shipping_charges}PKR
          </Typography>
        </div>
        <div className={cls.summary_item}>
          <Typography color="greyDark" variant="body2">
            Sales Tax &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography color="greyDark" variant="body2">
            0.00PKR
          </Typography>
        </div>
        <div className={cls.summary_item}>
          <Typography variant="body1">
            Total Amount &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography color="primary" variant="h3">
            {shipping_charges + sub_total}PKR
          </Typography>
        </div>
      </div>
      <div className={cls.cto_button}>
        <Button onClick={() => dispatch(clearCart(null))}>
          Delete ({items.length})
        </Button>
        <Button color="primary">Checkout</Button>
      </div>
    </Modal>
  );
}

export default CartModel;
