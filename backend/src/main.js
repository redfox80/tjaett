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

let clients = [];

setInterval(() => {
  console.log(clients);
}, 2000);

sock.on('connection', socket => {

  clients.push({
    id: socket.id,
    user: 1,
  });

  socket.on('sentMessage', s => {
    sock.emit('message', s);
  });

  socket.on('disconnect', s => {
    for(let i = 0; i < clients.length; i++) {
      if(clients[i].id === socket.id) {
        clients.splice(i, 1);
      }
    }
  });
});