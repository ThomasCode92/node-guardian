const path = require('path');

const express = require('express');
const { createYoga } = require('graphql-yoga');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const productsModel = require('./products/products.model');
const ordersModel = require('./orders/orders.model');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: () => productsModel,
      orders: () => ordersModel,
    },
  },
});

const app = express();
const handler = createYoga({ schema, graphiql: true });

app.use('/graphql', handler);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
