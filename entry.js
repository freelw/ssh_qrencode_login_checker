"use strict";

const express = require('express');
const router = express.Router();

const register_pool = {

}
router.get('/register', register);
router.get('/query', query);

function query(req, res) {
    let key = req.query.key;
    console.log('query key =', key);
    if (!!register_pool[key]) {
        res.end('1');
    } else {
        res.end('0');
    }
}

function register(req, res) {
    console.log('req.query : ', req.query);
    console.log('register : ', req.query.key);
    register_pool[req.query.key] = Date.now();
    res.end('0');
}

(function loop() {
    const timeout_interval = 30000;
    for (let key in register_pool) {
        let t = register_pool[key];
        if (t + timeout_interval < Date.now()) {
            delete register_pool[key];
        }
    }
    setTimeout(loop, 1000);
})();
module.exports = router;