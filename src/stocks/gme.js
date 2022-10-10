'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

const Chance = require('chance');
const chance = new Chance();

socket.on('getData', (payload) => {
  console.log('Here is GME Info:');
});

setInterval( () => {
  let stockPayload = {
    company: 'Gamestop Inc',
    price: chance.dollar({ min: 22.00, max: 27.00 }),
  };
  console.log('GME Interval payloads');
  socket.emit('GME TEST', stockPayload);

}, Math.random()*1000);