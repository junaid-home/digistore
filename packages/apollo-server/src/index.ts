import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import schema from "./graphql";

import dataProvider from "./config/db";

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀 [ SERVER ] running at: ${url}`);

dataProvider.initialize().then((conn) => {
  console.log(`📙 [ DATABASE ] connection established!`);

  conn
    .runMigrations()
    .then(() => console.log(`📙 [ MIGRATIONS ] data is seeded!`));
});
