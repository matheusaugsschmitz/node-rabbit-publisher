var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/', indexRouter);

module.exports = app;
