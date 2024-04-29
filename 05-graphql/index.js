const express = require('express');
const { createSchema, createYoga } = require('graphql-yoga');

const schema = createSchema({
  typeDefs: `
    type Query {
      description: String
      price: Float
    }
  `,
  resolvers: {
    Query: {
      description: () => 'Red Shoe',
      price: () => 42.12,
    },
  },
});

const app = express();
const handler = createYoga({ schema, graphiql: true });

app.use('/graphql', handler);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
