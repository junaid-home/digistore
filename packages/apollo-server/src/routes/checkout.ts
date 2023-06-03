import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import Stripe from "stripe";

import dataSource from "../config/db";
import Product from "../models/Product";
import Color from "../models/Color";
import Size from "../models/Size";
import { checkoutItemsValidator } from "../validators/checkout";
import setAuthUser from "../middlewares/set-auth-user";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2022-11-15",
});

router.post("/", setAuthUser, async (req, res) => {
  const user = (req as any).user;

  const productRepository = dataSource.getRepository(Product);
  const colorRepository = dataSource.getRepository(Color);
  const sizeRepository = dataSource.getRepository(Size);

  const { items } = req.body;

  if (!items.length) {
    return res.status(400).json({ message: "No item(s) to checkout!" });
  }

  const error = checkoutItemsValidator(items);
  if (error) {
    return res.json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }

  const checkoutList = await Promise.all(
    items.map((item) => {
      return new Promise(async (resolve) => {
        const product = await productRepository.findOne({
          where: { id: item.product },
          relations: ["gallery"],
        });
        const color = await colorRepository.findOne({
          where: { name: item.color },
        });
        const size = await sizeRepository.findOne({
          where: { name: item.size },
        });

        return resolve({
          product: {
            id: product.id,
            name: product.name,
            desc: product.summary,
            images: product.gallery,
            price: product.selling_price,
          },
          size: size.id,
          color: color.id,
          quantity: item.quantity,
          user: user.id,
        });
      });
    })
  );

  const session = await stripe.checkout.sessions.create({
    line_items: checkoutList.map((item) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: item.product.name,
          description: item.product.desc,
          images: item.product.images.map((i) => i.source),
          metadata: {
            product: item.product.id,
            color: item.color,
            size: item.size,
            user: item.user,
          },
        },
        unit_amount: parseInt(item.product.price) * 100, // minimum 50 cents are required for creating session
      },
      quantity: item.quantity,
    })),
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 200 * 100,
            currency: "pkr",
          },
          display_name: "Standard shipping (Leopards/TCS)",
        },
      },
    ],
    mode: "payment",
    success_url: `${process.env.DOMAIN}/orders?payment=success`,
    cancel_url: `${process.env.DOMAIN}`,
  });

  res.status(200).json({ url: session.url });
});

export default router;
