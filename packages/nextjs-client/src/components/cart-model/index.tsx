import cls from "@digistore/scss/lib/templates/Cart-model.module.css";

import * as React from "react";

import Image from "next/image";

import {
  Typography,
  Button,
  QuantityCounter,
} from "@digistore/react-components";

import LinesEllipsis from "react-lines-ellipsis";
import Modal from "react-responsive-modal";

function CartItem() {
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div className={cls.cart_item}>
      <div className={cls.cart_item_desc}>
        <Image
          className="rm-sm"
          src="/assets/1.jpg"
          alt="PCI"
          width={70}
          height={70}
        />
        <div>
          <LinesEllipsis
            text="Turbo Water Saver Shower Head and High Pressure Shower head Rainfall with Fan Bathroom Accessories"
            maxLine={1}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <Typography className="tm-sm" color="greyDark" variant="body2">
            Size: Large
          </Typography>
          <div className={cls.cart_item_mobile}>
            <div className={cls.cart_item_mobile_price}>
              <Typography className="tm-sm" color="black" variant="h3">
                400PKR
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
          400PKR
        </Typography>
      </div>
    </div>
  );
}

function CartModel({ open, onClose }: { open: boolean; onClose: () => void }) {
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
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={cls.summary}>
        <div className={cls.summary_item}>
          <Typography color="greyDark" variant="body2">
            Sub Total &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant="h3">900PKR</Typography>
        </div>
        <div className={cls.summary_item}>
          <Typography color="greyDark" variant="body2">
            Shipping Charge &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography color="greyDark" variant="body2">
            200PKR
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
            920PKR
          </Typography>
        </div>
      </div>
      <div className={cls.cto_button}>
        <Button>Delete (3)</Button>
        <Button color="primary">Checkout</Button>
      </div>
    </Modal>
  );
}

export default CartModel;
