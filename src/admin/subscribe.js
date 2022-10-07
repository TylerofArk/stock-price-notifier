'use strict';

module.exports = (socket) => (payload) => {
  console.log('Subscribtion sent', payload);
  socket.emit('NEW_SUBSCRIBER', payload);
};
