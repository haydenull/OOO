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
            const email = ctx.request.body.email;
            const dbResult = yield ctx.service.user.find(email);
            console.log(ctx.request.body);
            if (dbResult.length === 0) {
                result = { success: false, message: '用户不存在' };
            } else if (dbResult[0].password === ctx.request.body.password) {
                result = { success: true, message: '登录成功', id: dbResult[0].id };
            } else {
                result = { success: false, message: '密码错误' };
            }
            ctx.body = result;
            ctx.status = 200;
        }
    }
    return UserController;
};
