import { v4 as uuid } from "uuid";
import { ILike } from "typeorm";

import dataSource from "../config/db";

import responseSerializer from "../helpers/response-serializer";

import Order from "../models/Order";
import OrderItem from "../models/Order-Item";
import Payment from "../models/Payment";
import Color from "../models/Color";
import Size from "../models/Size";
import User from "../models/User";
import Product from "../models/Product";

export const typeDefs = `#graphql
    input OrderItemInput {
        id: String!
        selling_price: Float!
        size: String!
        color: String!
        quantity: Float!
    }

    extend type Mutation {
        createOrder(items: [OrderItemInput!]!): OrderResponse!
    }

    extend type Query {
        orders: OrderResponse!
    }

    type Payment {
        id: String!
        method: String!
        amount: Float!,
        created_at: String!
        updated_at: String!
    }

    type Product {
        id: String!
        name: String!
        slug: String!
        summary: String!
        desc: String!
        market_price: Float!
        selling_price: Float!
        ratings: Float!
        thumbnail: String!
        created_at: String!
        updated_at: String!
    }

    type OrderItem {
        size: String!
        color: String!
        quantity: Float!
        product: Product!
    }

    type OrderData {
        id: String!
        status: String!
        payment: Payment!
        items: [OrderItem!]!
    }

    type OrderResponse implements Response {
        code: Int!
        status: String!
        message: String
        data: [OrderData!]
    }

`;

export const resolvers = {
  Query: {
    orders: async (_parent, _args, context, _info) => {
      if (!context.isAuthenticated || !context.user)
        return responseSerializer(401, "Invalid Authentication Token!");

      const orderRepository = dataSource.getRepository(Order);

      const orders = await orderRepository.find({
        where: { user: { id: context.user.id } },
        relations: [
          "items",
          "payment",
          "items.product",
          "items.product.gallery",
          "items.size",
          "items.color",
        ],
        order: {
          id: "ASC",
        },
      });

      const ordersWithThumbsItem = orders.map((order) => ({
        ...order,
        items: order.items.map((item) => ({
          ...item,
          size: item.size.name,
          color: item.color.name,
          product: {
            ...item.product,
            thumbnail: item.product.gallery[0].source,
          },
        })),
      }));

      return responseSerializer(200, ordersWithThumbsItem);
    },
  },
  Mutation: {
    createOrder: async (_parent, args, context, _info) => {
      const colorRepository = dataSource.getRepository(Color);
      const sizeRepository = dataSource.getRepository(Size);
      const userRepository = dataSource.getRepository(User);
      const productRepository = dataSource.getRepository(Product);

      if (!context.isAuthenticated || !context.user)
        return responseSerializer(401, "Invalid Authentication Token!");

      const { items } = args;
      try {
        if (!items?.length) {
          throw new Error("No Order Items Provided!");
        }

        const payment = new Payment();
        payment.id = uuid();
        payment.method = "COD";
        payment.amount =
          200 +
          items.reduce(
            (sum, item) => (sum += item.selling_price * item.quantity),
            0
          );

        await dataSource.transaction(async (manager) => {
          const savedPayment = await manager.save(payment);

          const savedOrderItemsPromiseArray = await items.map(async (item) => {
            const color = await colorRepository.findOne({
              where: {
                name: ILike(`%${item.color}%`),
              },
            });
            const size = await sizeRepository.findOne({
              where: {
                name: ILike(`%${item.size}%`),
              },
            });
            const product = await productRepository.findOne({
              where: { id: item.id },
            });

            const orderItem = new OrderItem();
            orderItem.id = uuid();
            orderItem.quantity = item.quantity;
            orderItem.color = color;
            orderItem.size = size;
            orderItem.product = product;

            const _orderItem = await manager.save(orderItem);

            return _orderItem;
          });

          const savedOrderItems = await Promise.all(
            savedOrderItemsPromiseArray
          );

          const user = await userRepository.findOne({
            where: {
              id: context.user.id,
            },
          });

          const order = new Order();
          order.id = uuid();
          order.status = "pending";
          order.user = user;
          order.payment = savedPayment;
          order.items = savedOrderItems;

          await manager.save(order);
        });

        return responseSerializer(200, "Order Successfully Created!");
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
  },
};
