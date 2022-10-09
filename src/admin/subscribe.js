'use strict';

module.exports = (socket) => (payload) => {
  console.log('Subscription sent', payload);
  socket.emit('NEW_SUBSCRIBER', payload);
};
