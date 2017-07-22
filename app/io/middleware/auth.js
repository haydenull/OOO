'use strict';
module.exports = app => {
    return function* (next) {
        this.socket.emit('res', 'connected!');
        yield* next;
        console.log('disconnection!');
    };
};
