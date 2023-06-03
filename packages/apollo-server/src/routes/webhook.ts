import * as dotenv from "dotenv";
dotenv.config();

import { v4 as uuid } from "uuid";
import express from "express";
import Stripe from "stripe";
import dataSource from "../config/db";
import Color from "../models/Color";
import Size from "../models/Size";
import User from "../models/User";
import Product from "../models/Product";
import Payment from "../models/Payment";
import Order from "../models/Order";
import OrderItem from "../models/Order-Item";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2022-11-15",
});

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const colorRepository = dataSource.getRepository(Color);
    const sizeRepository = dataSource.getRepository(Size);
    const userRepository = dataSource.getRepository(User);
    const productRepository = dataSource.getRepository(Product);
    const orderItemRepository = dataSource.getRepository(OrderItem);

    const endpointSecret = process.env.STRIPE_WEBHOOK_SIG_SECRET || "";
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    switch (event.type) {
      case "checkout.session.completed":
        const line_items = await stripe.checkout.sessions.listLineItems(
          event.data.object.id,
          {
            expand: ["data.price.product"],
          }
        );

        const sum = line_items.data.reduce(
          (sum, prod: any) => sum + prod.amount_total,
          0
        );
        const total_amount = sum / 100 + 200;

        const user = await userRepository.findOne({
          where: {
            id: (line_items.data[0].price.product as any).metadata.user,
          },
        });

        const orderItems: any[] = await Promise.all(
          line_items.data.map((item: any) => {
            return new Promise(async (resolve) => {
              const colorId = item.price.product.metadata.color;
              const sizeId = item.price.product.metadata.size;
              const productId = item.price.product.metadata.product;

              const color = await colorRepository.findOne({
                where: {
                  id: colorId,
                },
              });
              const size = await sizeRepository.findOne({
                where: {
                  id: sizeId,
                },
              });
              const product = await productRepository.findOne({
                where: { id: productId },
              });

              const orderItem = new OrderItem();
              orderItem.id = uuid();
              orderItem.quantity = item.quantity;
              orderItem.color = color;
              orderItem.size = size;
              orderItem.product = product;

              const _orderItem = await orderItemRepository.save(orderItem);

              return resolve(_orderItem);
            });
          })
        );

        const payment = new Payment();
        payment.id = uuid();
        payment.method = "Card";
        payment.amount = total_amount;

        await dataSource.transaction(async (manager) => {
          const savedPayment = await manager.save(payment);

          const order = new Order();
          order.id = uuid();
          order.status = "pending";
          order.user = user;
          order.payment = savedPayment;
          order.items = orderItems;

          await manager.save(order);
        });

        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.send();
  }
);

export default router;
