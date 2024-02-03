# Improving Performance

This package serves as a practical guide for optimizing performance in Node.js applications. It introduces [PM2](https://pm2.keymetrics.io/), a process manager for Node.js applications. It helps in managing and maintaining Node.js applications in a production environment, providing features to ensure application stability, ease of deployment, and monitoring capabilities.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ThomasCode92/node-toolkit
   cd 03-performance
   ```

2. **Use PM2:**

   ```bash
   npm run start # start using node itself
   npm run pm2 start index.js # start using PM2
   npm run pm2 <COMMAND> # run a PM2 command
   ```

   The server will start running on `http://localhost:3000`.

3. **Access the Web Server:**<br />
   Open your web browser and navigate to

   - `http://localhost:3000` for an instance response
   - `http://localhost:3000/timer` for an delayed response

4. **Testing the API using Postman:**<br />
   Open [Postman](https://www.postman.com/) and import the provided collection file [postman_collection.json](../api/postman_collection.json) included in the repository. The collection contains sample requests to interact with the web server.

### Customize the Server

Feel free to explore and test some PM2 commands to fine-tune the application's performance, whether it's experimenting with clustering options, monitoring processes, or utilizing advanced features for seamless deployment and maintenance. More info can be found in the [official docs](https://pm2.keymetrics.io/docs/usage/quick-start/).
