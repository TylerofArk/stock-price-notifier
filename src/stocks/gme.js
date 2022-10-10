'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

// const Chance = require('chance');
// const chance = new Chance();

socket.on('getData', (payload) => {
  console.log('Here is GME Info:');
});

setInterval( () => {
  let stockPayload = {
    company: 'Gamestop Inc',
    price: 25.09 + (Math.random()*2),
  };
  console.log('GME Interval payloads');
  socket.emit('GME TEST', stockPayload);

}, Math.random()*1000);