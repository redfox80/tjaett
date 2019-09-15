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
sock.on('connection', socket => {
  console.log('connection');
});