'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/connections');

const Chance = require('chance');
const chance = new Chance();

socket.on('NEW_SUBSCRIBER', (payload) => {
  console.log('Welcome to Investalert', payload.invite.name);
});

setInterval(() => {
  const invite = {
    company: chance.company(),
    date: chance.date({string: true}),
    time: chance.hour(),
    price: chance.dollar(),
  };

  console.log('New Event, invite sent');
  socket.emit('INVITED', {invite} );
}, 5000);
