import { v4 as uuid } from "uuid";
import { MigrationInterface, QueryRunner } from "typeorm";

import dataSource from "../config/db";
import Category from "../models/Category";
import Promotion from "../models/Promotion";
import Color from "../models/Color";
import Size from "../models/Size";
import Image from "../models/Image";
import Product from "../models/Product";

import { Products, Categories, Colors, Promotions, Sizes } from "./seedData";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class SeedData1683041917045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categoryRepository = dataSource.getRepository(Category);
    const promotionRepository = dataSource.getRepository(Promotion);
    const colorRepository = dataSource.getRepository(Color);
    const sizeRepository = dataSource.getRepository(Size);
    const imageRepository = dataSource.getRepository(Image);

    const categories = await categoryRepository.save(Categories);
    const promotions = await promotionRepository.save(Promotions);
    const colors = await colorRepository.save(Colors);
    const sizes = await sizeRepository.save(Sizes);

    await Products.forEach(async (p) => {
      const productRepository = dataSource.getRepository(Product);

      const images = p.gallery.map((imgSrc) => ({
        id: uuid(),
        name: p.name,
        source: imgSrc,
      }));

      const galley = await imageRepository.save(images);

      const product = new Product();
      product.id = p.id;
      product.name = p.name;
      product.slug = p.slug;
      product.summary = p.summary;
      product.desc = p.desc;
      product.market_price = p.market_price;
      product.selling_price = p.selling_price;
      product.ratings = p.ratings;

      product.category = categories[randomIntFromInterval(0, 4)];
      product.promotion = promotions[randomIntFromInterval(0, 1)];
      product.colors = colors;
      product.sizes = sizes;
      product.gallery = galley;

      await productRepository.save(product);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
