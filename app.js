
"use strict";
const entry = require('./entry');
const express = require('express');
const app = express();
app.disable('x-powered-by');
app.use('/', entry);
app.use(function (req, res) {
    res.json({errCode: 404});
});
app.set('host', '0.0.0.0');
app.set('port', 8080);
app.listen(app.get('port'), app.get('host'), function () {
    console.log('Express server listening on port', server.address().port);
});
process.on('uncaughtException', function(err){
    console.error('catch exception:', err);
});
console.log("server running...");