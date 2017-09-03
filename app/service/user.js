'use strict';
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const passwordReg = /^\w{6,15}$/;
const nameReg = /([\u4e00-\u9fa5]|\w){4,}/gm;

module.exports = app => {
    return class User extends app.Service {
        // 依据邮箱查询用户密码
        * find(email) {
            const password = yield app.mysql.select('user', {
                where: { email },
                columns: [ 'password', 'id', 'name' ],
            });
            return password;
        }
        verifyEmail(email) {
            return emailReg.test(email);
        }
        verifyPassword(password) {
            return passwordReg.test(password);
        }
        verifyName(name) {
            return nameReg.test(name);
        }
    };
};
