'use strict';
module.exports = (socket, gmeSET) => (payload) => {
  if (payload.price > gmeSET) {
    console.log(`${payload.company} price is: ${payload.price}`);
    // socket.emit('infoDone', payload);
  }
  return;
};