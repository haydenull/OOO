'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        * signin() {
            console.log(this.app.mysql);
            const result = yield this.app.mysql.insert('user', { name: 'Hayden', password: '123456', email: 'brooklyn1984@qq.com' });
            this.ctx.body = '创建用户成功' + result;
        }
    }
    return UserController;
};
