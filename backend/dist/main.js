"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main(io, express, http) {
        this.io = io;
        this.express = express;
        this.http = http;
        this.run();
    }
    Main.prototype.run = function () {
        var _this = this;
        console.log('This is a run test');
        this.io.on('connection', function (socket) {
            var safeJoin = function (currentId) {
                _this.io.leave(_this.previousId);
                socket.join(currentId);
                _this.previousId = currentId;
            };
        });
        this.http.listen(80);
    };
    return Main;
}());
