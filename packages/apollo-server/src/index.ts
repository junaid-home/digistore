import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import schema from "./graphql";

import dataProvider from "./config/db";

import { decodeToken } from "./helpers/jwt";

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization || "";

    const isAuthenticated = Boolean(decodeToken(token)?.id);

    let user;
    if (isAuthenticated) user = decodeToken(token);

    return { isAuthenticated, user };
  },
});
console.log(`🚀 [ SERVER ] running at: ${url}`);

dataProvider.initialize().then((conn) => {
  console.log(`📙 [ DATABASE ] connection established!`);

  conn
    .runMigrations()
    .then(() => console.log(`📙 [ MIGRATIONS ] data is seeded!`));
});
