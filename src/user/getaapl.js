'use strict';
module.exports = (socket) => (payload) => {
  if (payload.price > 130) {
    console.log(`AAPL price is: ${payload.price}`);
    socket.emit('aaplDone', payload);
  }
  return;
};