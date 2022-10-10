'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

const Chance = require('chance');
const chance = new Chance();

socket.on('getData', (payload) => {
  console.log('Here is AAPL Info:');
});

setInterval( () => {
  let stockPayload = {
    company: 'Apple Inc',
    price: chance.dollar({ min: 130.00, max: 155.00 }),
  };
  console.log('AAPL Interval payloads');
  socket.emit('AAPL TEST', stockPayload);

}, Math.random()*10000);