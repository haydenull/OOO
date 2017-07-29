'use strict';
module.exports = app => {
    return function* (next) {
        // this.socket.emit('link', 'link chat server success!');
        yield* next;
        console.log('disconnection!');
    };
};
