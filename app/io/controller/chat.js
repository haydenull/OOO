'use strict';
module.exports = app => {
    return function* () {
        const message = this.args[0];
        console.log('chat 控制器打印', message);
        // this.socket.emit('chat', `Hi! I've got your message: ${message}`);
        this.server.sockets.emit('chat', message);
    };
};
