const path = require('path');

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  app.use(express.json(), expressMiddleware(server));

  await new Promise(resolve => app.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:3000/graphql`);
}

startApolloServer();
