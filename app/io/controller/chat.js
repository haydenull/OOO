'use strict';
module.exports = app => {
    return function* () {
        const message = this.args[0];
        console.log(message);
        this.socket.emit('res', `Hi! I've got your message: ${message}`);
    };
};
