'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    app.get('/signin', app.controller.user.signin);
};
