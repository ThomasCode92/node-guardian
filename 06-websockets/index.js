const http = require('http');
const { Server } = require('socket.io');

const sockets = require('./sockets');
const { app } = require('./app');

const PORT = 3000;

const httpServer = http.createServer(app);
const socketServer = new Server(httpServer, { cors: { origin: '*' } });

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

sockets.listen(socketServer);
