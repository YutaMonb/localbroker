'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var basicAuth = require('basic-auth-connect');

app.use(morgan('short'));
app.use(basicAuth('hage', 'hirakegoma'));

app.use('/version', require('./endpoint/version'));

app.listen(8000);
