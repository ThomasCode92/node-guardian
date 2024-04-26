const express = require('express');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`);

const rootValue = {
  description: 'Red Shoe',
  price: 42.12,
};

const handler = createHandler({ schema, rootValue });

const app = express();

app.use('/graphql', handler);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
