require('babel-polyfill');

import express from 'express';
import http from 'http';
import io from 'socket.io';

const server = express();

server.get('/', (req, res) => {
    res.send('Hey there');
});

const web = http.createServer(server).listen(80);

const sock = io(web);

sock.on('connection', socket => {
   console.log('connection');
});