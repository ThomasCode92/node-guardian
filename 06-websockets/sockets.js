let readyPlayerCount = 0;

function listen(io) {
  const pongNamespace = io.of('/pong');

  pongNamespace.on('connection', socket => {
    console.log(`Client with id ${socket.id} connected`);

    let room;

    socket.on('ready', () => {
      room = 'room' + Math.floor(readyPlayerCount / 2);
      socket.join(room);

      console.log(`Client with id ${socket.id} is ready in room ${room}`);
      readyPlayerCount++;

      if (readyPlayerCount % 2 === 0) {
        pongNamespace.in(room).emit('startGame', socket.id);
      }
    });

    socket.on('paddleMove', paddleData => {
      socket.to(room).emit('paddleMove', paddleData);
    });

    socket.on('ballMove', ballData => {
      socket.to(room).emit('ballMove', ballData);
    });

    socket.on('disconnect', reason => {
      console.log(`Client with id ${socket.id} disconnected: ${reason}`);
      socket.leave('room');
    });
  });
}

module.exports = { listen };
