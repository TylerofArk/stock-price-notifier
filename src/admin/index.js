'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

const createHandleSubscription = require('./subscribe');

const handleSubscription = createHandleSubscription(socket);
socket.on('INVITED', handleSubscription);
