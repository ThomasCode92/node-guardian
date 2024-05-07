const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

const PORT = 3000;
let readyPlayerCount = 0;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

io.on('connection', socket => {
  console.log(`Client with id ${socket.id} connected`);

  socket.on('ready', () => {
    console.log(`Client with id ${socket.id} is ready`);
    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      io.emit('startGame', socket.id);
    }
  });

  socket.on('paddleMove', paddleData => {
    socket.broadcast.emit('paddleMove', paddleData);
  });
});
