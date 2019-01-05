'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('short'));
app.use('/version', require('./endpoint/version'));

app.listen(8000);