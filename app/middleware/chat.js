'use strict';
module.exports = app => {
    return function* chat(next) {
        this.socket.emit('res', '链接成功');
        yield* next;
        console.log('断开链接');
    };
};
