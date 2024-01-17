# Web Servers

This package serves as a guide to building a basic web server in Node.js without the use of external packages. The goal is to provide a clear and concise demonstration of fundamental concepts for creating a simple yet functional web server using pure Node.js.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
     git clone https://github.com/ThomasCode92/node-toolkit
     cd 01-web-servers
   ```

2. **Run the Server:**

   ```bash
     node index.js
   ```

   The server will start running on `http://localhost:3000`. You can customize the port in the `index.js` file.

3. **Access the Web Server:**<br />
   Open your web browser and navigate to `http://localhost:3000/friends` to see the minimal web server in action. In the terminal, you can interact with the web server using the fetch api:

   ```javascript
   fetch('http://localhost:3000/friends/1')
     .then(response => response.json())
     .then(data => console.log(data));
   ```

4. **Testing the API using Postman:**<br />
   Open [Postman](https://www.postman.com/) and import the provided collection file [postman_collection.json](../api/postman_collection.json) included in the repository. The collection contains sample requests to interact with the web server.

   - Send a GET request to http://localhost:3000/friends to retrieve a list of famous friends.
   - Explore the collection for additional requests to understand how the server handles different HTTP methods and routes.

   This allows you to interact with the web server and observe its behavior through Postman, making it convenient to test various endpoints and methods.

### Customize the Server

Feel free to explore and modify the `index.js` file to understand how different aspects of the server, such as routing and handling requests, are implemented by just using core node functionality.
