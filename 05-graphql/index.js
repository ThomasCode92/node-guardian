const express = require('express');
const { createSchema, createYoga } = require('graphql-yoga');

const { DUMMY_PRODUCTS, DUMMY_ORDERS } = require('./data');

const schema = createSchema({
  typeDefs: `
    type Query {
      products: [Product]
      orders: [Order]
    }

    type Product {
      id: ID!
      description: String!
      reviews: [Review]
      price: Float!
    }

    type Review {
      rating: Int!
      comment: String
    }

    type Order {
      date: String!
      subtotal: Float!
      items: [OrderItem]
    }

    type OrderItem {
      product: Product!
      quantity: Int!
    }
  `,
  resolvers: {
    Query: {
      products: () => DUMMY_PRODUCTS,
      orders: () => DUMMY_ORDERS,
    },
  },
});

const app = express();
const handler = createYoga({ schema, graphiql: true });

app.use('/graphql', handler);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
