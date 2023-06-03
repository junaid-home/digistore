import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
import express from "express";

import schema from "./graphql";

import dataProvider from "./config/db";

import checkoutRouter from "./routes/checkout";
import webhookRouter from "./routes/webhook";
import setAuthContext from "./middlewares/set-auth-context";

const app = express();

const server = new ApolloServer({
  schema,
});

await server.start();

// stripe requires "raw bodyParser" so this route should be placed before bodyParser middleware
app.use("/stripe/webhook", webhookRouter);

app.use(pkg.json());
app.use(cors<cors.CorsRequest>());

app.use("/checkout-stripe", checkoutRouter);
app.use(
  "/graphql",
  expressMiddleware(server, {
    context: setAuthContext,
  })
);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 [ SERVER ] running at: http://localhost:4000/graphql`)
);

dataProvider.initialize().then((conn) => {
  console.log(`📙 [ DATABASE ] connection established!`);

  conn
    .runMigrations()
    .then(() => console.log(`📙 [ MIGRATIONS ] data is seeded!`));
});
