"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

const server = (0, _express.default)();
server.get('/', (req, res) => {
  res.send('Hey there');
});

const web = _http.default.createServer(server).listen(80);

const sock = (0, _socket.default)(web);
let clients = [];
setInterval(() => {
  console.log(clients);
}, 2000);
sock.on('connection', socket => {
  clients.push({
    id: socket.id,
    user: 1
  });
  socket.on('sentMessage', s => {
    sock.emit('message', s);
  });
  socket.on('disconnect', s => {
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].id === socket.id) {
        clients.splice(i, 1);
      }
    }
  });
});