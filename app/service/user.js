'use strict';
module.exports = app => {
    return class User extends app.Service {
        // 依据邮箱查询用户密码
        * find(email) {
            const password = yield app.mysql.select('user', {
                where: { email },
                columns: [ 'password' ],
            });
            return password;
        }
    };
};
