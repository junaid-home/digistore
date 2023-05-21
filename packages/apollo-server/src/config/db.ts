import * as dotenv from "dotenv";

import "reflect-metadata";
import { DataSource } from "typeorm";

dotenv.config();

import User from "../models/User";
import Address from "../models/Address";
import Size from "../models/Size";
import Color from "../models/Color";
import Promotion from "../models/Promotion";
import Category from "../models/Category";
import Image from "../models/Image";
import Product from "../models/Product";
import Payment from "../models/Payment";
import OrderItem from "../models/Order-Item";
import Order from "../models/Order";

import { SeedData1683041917045 } from "../migrations/1683041917045-seedDataMigration";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    User,
    Address,
    Size,
    Color,
    Promotion,
    Category,
    Image,
    Product,
    Payment,
    OrderItem,
    Order,
  ],
  migrations: [SeedData1683041917045],
  subscribers: [],
});

export default dataSource;
