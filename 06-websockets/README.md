# WebSockets

This package serves as a practical guide for working with WebSockets in Node.js applications using '_socket.io_'. It covers essential elements like broadcasting, event handling, and more complex topics such as _namespaces_ and _rooms_. Additionally, it showcases the integration of Express.js and 'socket.io'.

## Getting Started

Follow these steps to set up and run the web server locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ThomasCode92/node-toolkit
   cd 06-websockets
   ```

2. **Run the Server:**

   ```bash
   npm install
   npm run start # start using node itself
   npm run dev # start using nodemon
   ```

   The server will start running on `http://localhost:3000`. You can customize the port in the `index.js` file.

3. **Access the Web Server:**<br />
   Open your web browser and navigate to `http://localhost:3000` to see the Socket server in action. To start a multiplayer pong game, open the same page in another browser instance.

### Customize the Server

Feel free to explore and modify the source code to understand how 'socket.io' can be used to enable Bidirectional and low-latency communication between client and server<br />Visit the following website for more information:

- [WebSocket](https://en.wikipedia.org/wiki/WebSocket)
- [socket.io](https://socket.io/)
