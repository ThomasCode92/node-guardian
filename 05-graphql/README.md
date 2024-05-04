# GraphQL

This package serves as a practical guide for working with GraphQL in Node.js applications. It delves into fundamental aspects such as "_queries_" and "_mutations_", explores GraphQL Yoga, how to work with "_GraphAL-Tools_" and demonstrates how to construct a GraphQL server using the industry-standard _Apollo_ framework.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ThomasCode92/node-toolkit
   cd 05-graphql
   ```

2. **Run the Server:**

   ```bash
   npm install
   npm run start # start using node itself
   npm run dev # start using nodemon
   ```

   The GraphQL server will start running on `http://localhost:3000/graphql`. You can customize the port in the `index.js` file.

3. **Access the Web Server:**<br />
   Open your web browser and navigate to `http://localhost:3000/graphql` to see the Apollo GraphQL server in action.

4. **Testing the API using Postman:**<br />
   Open [Postman](https://www.postman.com/) and import the provided [collection file](../api/postman_collection.json) included in the repository. The collection contains sample requests to interact with the web server.

   - Send a Query request to http://localhost:3000/graphql to retrieve a list of products.
   - Send a Mutation request to http://localhost:3000/graphql to add a product to the list

   This allows you to interact with the web server and observe its behavior through Postman, making it convenient to test various Queries and Mutations.

### Customize the Server

Feel free to explore and modify the source code to understand how different aspects of the server, such as schemas and resolvers, are implemented by using Apollo and GraphQL-Tools.<br />Visit the following website for more information:

- [GraphQL](https://graphql.org/)
- [GraphQL-Tools](https://the-guild.dev/graphql/tools)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [Apollo Framework](https://www.apollographql.com/)
