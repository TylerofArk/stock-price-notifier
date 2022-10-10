'use strict';
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

let getAAPL = require('./getaapl');
let getPrice = require('../admin/getPrice');

socket.on('AAPL.INFO', getAAPL(socket));
socket.on('TSLA.INFO', getPrice(socket));
// socket.on('GME.INFO', getPrice(socket));
