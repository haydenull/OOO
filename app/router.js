'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    // 注册
    app.get('/signin', app.controller.user.signin);
    // 登录
    app.get('/login', app.controller.user.login);
    app.get('/cors', app.controller.user.cors);
    app.io.of('/').route('chat', app.io.controllers.chat);
};
