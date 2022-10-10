'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

const connections = server.of('/connections');

connections.on('connection', (socket) => {
  console.log('Socket connected to connections namespace', socket.id);

  socket.on('AAPL TEST', (payload) => {
    console.log('AAPL testing', payload);
    socket.broadcast.emit('AAPL.INFO', payload);
  });

  socket.on('GME TEST', payload => {
    console.log('GME testing', payload);
    socket.broadcast.emit('GME.INFO', payload);
  });

  socket.on('TSLA TEST', payload => {
    console.log('TSLA testing', payload);
    socket.broadcast.emit('TSLA.INFO', payload);
  });
});
