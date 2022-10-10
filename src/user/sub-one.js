'use strict';
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/connections');

let getPrice = require('../hub/getPrice');


let gmeSET = 24;
let aaplSET = 100;
let tslaSET = 12;


socket.on('AAPL.INFO', getPrice(socket, aaplSET));
socket.on('TSLA.INFO', getPrice(socket, tslaSET));
socket.on('GME.INFO', getPrice(socket, gmeSET));

