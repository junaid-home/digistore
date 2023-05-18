import { ILike, Between } from "typeorm";

import dataSource from "../config/db";

import responseSerializer from "../helpers/response-serializer";

import Category from "../models/Category";
import Product from "../models/Product";

export const typeDefs = `#graphql
    type Promotion {
        id: String!
        name: String!
        desc: String!
        active: Boolean!
        discount_percentage: Float!
        expiry_date: String!
        created_at: String!
        updated_at: String!
    }

    type Category {
        id: String!
        name: String!
        slug: String!
        created_at: String!
        updated_at: String!
    }

    type Size {
        id: String!
        name: String!
        name_brief: String!
        created_at: String!
        updated_at: String!
    }

    type Color {
        id: String!
        name: String!
        hex_code: String!
        created_at: String!
        updated_at: String!
    }

    type Image {
        id: String!
        name: String!
        source: String!
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
        promotion: Promotion!
        category: Category!
        sizes: [Size!]
        colors: [Color!]
        thumbnail: String
        gallery: [Image!]
        created_at: String!
        updated_at: String!
    }

    input Filter {
        promotion: String!
        skip: Int
        limit: Int
    }

    input SearchFilter {
      query: String!
      category: String
      min_price: Float
      max_price: Float
      skip: Int
      limit: Int
    }

    extend type Query {
        product(slug: String!): GetProductResponse!
        products(filters: Filter!): GetProductsResponse!
        categories: GetCategoriesResponse!
    }

    extend type Mutation {
        search(filters: SearchFilter!): GetProductsResponse!
    }

    type GetProductsResponse implements Response {
        code: Int!
        status: String!
        message: String
        hasNextPage: Boolean
        data: [Product!]
    }

    type GetCategoriesResponse implements Response {
        code: Int!
        status: String!
        message: String
        data: [Category!]
    }

    type GetProductResponse implements Response {
        code: Int!
        status: String!
        message: String
        data: Product
    }
`;

const productRelations = [
  "category",
  "promotion",
  "sizes",
  "colors",
  "gallery",
];

export const resolvers = {
  Query: {
    async products(_parent, args, _contextValue, _info) {
      const productRepository = dataSource.getRepository(Product);

      try {
        const skip = parseInt(args.filters.skip) || 0;
        const limit = parseInt(args.filters.limit) || 10;

        const totalProductsCount = await productRepository.count();

        let products;
        if (args.filters.promotion) {
          const fetchedProducts = await productRepository.find({
            where: {
              promotion: { name: args.filters.promotion },
            },
            relations: productRelations,
            skip,
            take: limit,
          });

          products = fetchedProducts.map((product) => ({
            ...product,
            thumbnail: product?.gallery[0]?.source,
          }));
        } else {
          const fetchedProducts = await productRepository.find({
            relations: productRelations,
            skip,
            take: limit,
          });

          products = fetchedProducts.map((product) => ({
            ...product,
            thumbnail: product?.gallery[0]?.source,
          }));
        }

        return responseSerializer(200, products, {
          hasNextPage: totalProductsCount > limit + skip,
        });
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
    async categories(_parent, _args, _contextValue, _info) {
      const categoryRepository = dataSource.getRepository(Category);

      try {
        const categories = await categoryRepository.find({});

        return responseSerializer(200, categories);
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
    async product(_parent, args, _contextValue, _info) {
      const productRepository = dataSource.getRepository(Product);

      try {
        const product = await productRepository.findOne({
          where: { slug: args.slug },
          relations: productRelations,
        });
        if (!product)
          return responseSerializer(
            400,
            `No product found with slug: ${args.slug}`
          );

        return responseSerializer(200, product);
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
  },
  Mutation: {
    async search(_parent, args, _context, _info) {
      const productRepository = dataSource.getRepository(Product);

      const query = args.filters.query || "";
      const category = args.filters.category || "";
      const min = args.filters.min_price || 0;
      const max = args.filters.max_price || Infinity;
      const skip = parseInt(args.filters.skip) || 0;
      const limit = parseInt(args.filters.limit) || 10;

      try {
        const totalProductsCount = await productRepository.count({
          where: {
            name: ILike(`%${query}%`),
            summary: ILike(`%${query}%`),
            selling_price: Between(min, max),
            category: {
              name: ILike(`%${category}%`),
            },
          },
        });

        const fetchedProducts = await productRepository.find({
          where: {
            name: ILike(`%${query}%`),
            summary: ILike(`%${query}%`),
            selling_price: Between(min, max),
            category: {
              name: ILike(`%${category}%`),
            },
          },
          relations: ["gallery"],
          take: limit,
          skip,
        });

        const products = fetchedProducts.map((product) => ({
          ...product,
          thumbnail: product?.gallery[0]?.source,
        }));

        return responseSerializer(200, products, {
          hasNextPage: totalProductsCount > limit + skip,
        });
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
  },
};
