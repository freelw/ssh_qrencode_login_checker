"use strict";

const express = require('express');
const router = express.Router();

const register_pool = {

}
router.get('/register', register);
router.get('/query', query);

function query(req, res) {
    let key = req.query.key || req.query.KEY;
    if (!!register_pool[key]) {
        console.log('good key :', key);
        res.end('1');
    } else {
        console.log('bad key :', key);
        res.end('0');
    }
}

function register(req, res) {
    let key = req.query.key || req.query.KEY;
    console.log('req.query : ', req.query);
    console.log('register : ', key);
    register_pool[key] = Date.now();
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