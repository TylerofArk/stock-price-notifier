'use strict';
module.exports = (socket) => (payload) => {
  if (payload.price > 130) {
    console.log(`${payload.company} price is: ${payload.price}`);
    socket.emit('infoDone', payload);
  }
  return;
};