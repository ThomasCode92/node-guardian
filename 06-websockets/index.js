const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

io.on('connection', socket => {
  console.log('Client connected');
});
