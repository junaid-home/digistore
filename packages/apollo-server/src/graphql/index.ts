import merge from "lodash.merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { resolvers as userResolvers, typeDefs as userTypeDefs } from "./user";
import {
  resolvers as productResolvers,
  typeDefs as productTypeDefs,
} from "./product";

const Query = `#graphql
  interface Response {
    code: Int!
    status: String!
    message: String
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query, userTypeDefs, productTypeDefs],
  resolvers: merge(resolvers, userResolvers, productResolvers),
});

export default schema;
