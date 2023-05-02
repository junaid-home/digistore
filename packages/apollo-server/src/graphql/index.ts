import merge from "lodash.merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { resolvers as userResolvers, typeDefs as userTypeDefs } from "./user";

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
  typeDefs: [Query, userTypeDefs],
  resolvers: merge(resolvers, userResolvers),
});

export default schema;
