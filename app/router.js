'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    // 注册
    app.post('/signup', app.controller.user.signup);
    // 登录
    app.post('/login', app.controller.user.login);
    app.get('/cors', app.controller.user.cors);
    app.io.of('/').route('chat', app.io.controllers.chat);
};
