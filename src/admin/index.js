'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/connections');
const createHandleSubscription = require('./subscribe');
const handleSubscription = createHandleSubscription(socket);
socket.on('INVITED', handleSubscription);
