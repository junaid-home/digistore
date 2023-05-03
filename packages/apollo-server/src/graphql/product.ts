import dataSource from "../config/db";

import responseSerializer from "../helpers/response-serializer";
import Category from "../models/Category";

import Product from "../models/Product";
import Promotion from "../models/Promotion";

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
        gallery: [Image!]
        created_at: String!
        updated_at: String!
    }

    input Filter {
        promotion: String!
    }

    extend type Query {
        products(filters: Filter!): GetProductsResponse!
        categories: GetCategoriesResponse!
    }

    type GetProductsResponse implements Response {
        code: Int!
        status: String!
        message: String
        data: [Product!]
    }

    type GetCategoriesResponse implements Response {
        code: Int!
        status: String!
        message: String
        data: [Category!]
    }
`;

export const resolvers = {
  Query: {
    async products(_parent, args, _contextValue, _info) {
      const productRepository = dataSource.getRepository(Product);

      try {
        let products;

        if (args.filters.promotion) {
          products = await productRepository.find({
            where: {
              promotion: { name: args.filters.promotion },
            },
            relations: ["category", "promotion", "sizes", "colors", "gallery"],
          });
        } else {
          products = await productRepository.find({
            relations: ["category", "promotion", "sizes", "colors", "gallery"],
          });
        }

        return responseSerializer(200, products);
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
  },
};
