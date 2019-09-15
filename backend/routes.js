"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
exports.default = (function () {
    main_1.server.express.get('/', function (req, res) { return res.send('Hello World!'); });
    main_1.server.express.get('/test', function (req, res) { return res.send('This is test'); });
});
