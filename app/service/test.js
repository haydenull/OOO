'use strict';
module.exports = app => {
    return class Test extends app.Service {
        * test() {
            const result = yield this.app.mysql.insert('faiz', { title: 'Hello World' });
            return result;
        }
    };
};
