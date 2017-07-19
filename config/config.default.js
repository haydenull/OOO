'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1499962730630_3731';

    // add your config here
    config.mysql = {
        client: {
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'XINLUOGAO',
            database: 'faiz',
        },
        app: true,
        agent: false,
    };

    return config;
};
