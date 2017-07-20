'use strict';
module.exports = app => {
    return class User extends app.Service {
        // 依据邮箱查询用户密码
        * find(email) {
            const password = yield app.mysql.query(`select password from user where email = ${email}`);
            return password;
        }
    };
};
