# Express.js API

This package serves as a practical guide for building a foundational API using Node.js and Express. It introduces you to the powerful capabilities of Express and its middleware, focusing on essential concepts like Model-View-Controller (MVC), serving files, and implementing templating engines.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ThomasCode92/node-toolkit
   cd 02-express-api
   ```

2. **Run the Server:**

   ```bash
   npm install
   npm run start # start using node itself
   npm run dev # start using nodemon
   ```

   The server will start running on `http://localhost:3000`. You can customize the port in the `index.js` file.

3. **Access the Web Server:**<br />
   Open your web browser and navigate to `http://localhost:3000` or `http://localhost:3000/messages` to see the templating engine '[handlebars](https://handlebarsjs.com/)' in action.

4. **Testing the API using Postman:**<br />
   Open [Postman](https://www.postman.com/) and import the provided collection file [postman_collection.json](../api/postman_collection.json) included in the repository. The collection contains sample requests to interact with the web server.

   - Send a GET request to http://localhost:3000/friends to retrieve a list of famous friends.
   - Explore the collection for additional requests to understand how the server handles different HTTP methods and routes.

   This allows you to interact with the web server and observe its behavior through Postman, making it convenient to test various API endpoints.

### Customize the Server

Feel free to explore and modify the `index.js` file to understand how different aspects of the server, such as routing and handling requests, are implemented by using [express.js](https://expressjs.com/).
