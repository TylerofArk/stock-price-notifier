'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

// const Chance = require('chance');
// const chance = new Chance();

socket.on('getData', (payload) => {
  console.log('Here is AAPL Info:');
});

setInterval( () => {
  let stockPayload = {
    company: 'Apple Inc',
    price: 140.09 + (Math.random()),
  };
  console.log('AAPL Interval payloads');
  socket.emit('AAPL TEST', stockPayload);

}, Math.random()*1000);