const express = require("express");
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
const cors = require("cors");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const SignupDatabase = require("./datasources/signupDatabase");
const LoginDatabase = require("./datasources/loginDatabase");
const UserDatabase = require("./datasources/userDatabase");

const postgres = require("./config/postgres");
const typeDefs = require("./schema");
let resolvers = require("./resolvers");

const app = express();
const PORT = 8080;

app.use(cookieParser());

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true
};
app.set("CORS_CONFIG", corsConfig);

app.use(cors(corsConfig));

const dataSources = () => ({
  signupDatabase: new SignupDatabase(),
  loginDatabase: new LoginDatabase(),
  userDatabase: new UserDatabase()
});

resolvers = resolvers();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = new ApolloServer({
  context: ({ req }) => {
    return {
      app,
      req,
      postgres
    };
  },
  schema,
  dataSources
});

apolloServer.applyMiddleware({
  app,
  cors: app.get("CORS_CONFIG")
});

postgres.on("error", (err, client) => {
  console.error("Unexpected error on idle postgres client", err);
  process.exit(-1);
});

const server = app.listen(PORT, () => {
  console.log(`>> ${chalk.blue("Express running:")} http://localhost:${PORT}`);

  console.log(
    `>> ${chalk.magenta(
      "GraphQL playground:"
    )} http://localhost:${PORT}/graphql`
  );
});

server.on("error", err => {
  console.log(err);
});
