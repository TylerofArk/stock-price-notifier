'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

const Chance = require('chance');
const chance = new Chance();

socket.on('getData', (payload) => {
  console.log('Here is TSLA Info:');
});

setInterval( () => {
  let stockPayload = {
    company: 'Tesla Inc',
    price: chance.dollar({ min: 215.00, max: 235.00 }),
  };
  console.log('TSLA Interval payloads');
  socket.emit('TSLA TEST', stockPayload);

}, Math.random()*10000);