'use strict';

const PROXY_CONFIG = [
    {
        context: [
            '/balance',
            '/articles',
            '/payments'
        ],
        target : 'http://private-anon-1d68e226a0-testtechniquefront.apiary-mock.com',
        secure : false,
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;
