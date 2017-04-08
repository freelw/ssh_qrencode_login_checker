"use strict";

const express = require('express');
const router = express.Router();

const register_pool = {

}
router.get('/register', register);
router.get('/query', query);

function query(req, res) {
    console.log('query');
    res.end('0');
}
function register(req, res) {
    console.log('register');
    res.end('0');
}
module.exports = router;