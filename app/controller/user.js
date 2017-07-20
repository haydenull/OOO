'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        // 注册
        * signin() {
            const result = yield this.app.mysql.insert('user', { name: 'Hayden', password: '123456', email: 'brooklyn1984@qq.com' });
            this.ctx.body = '创建用户成功' + result;
        }
        // 测试跨域
        * cors(ctx) {
            ctx.body = '跨用成功';
            ctx.status = 200;
        }
        // 登录
        * login(ctx) {
            let result = {};
            const email = ctx.params.email;
            const password = yield ctx.service.user.find(email);
            // TODO: 用户不存在的情况
            if (ctx.params.password === password) {
                result = { success: true, message: '登录成功' };
            } else {
                result = { success: false, message: '密码错误' };
            }
            ctx.body = result;
            ctx.status = 200;
        }
    }
    return UserController;
};
