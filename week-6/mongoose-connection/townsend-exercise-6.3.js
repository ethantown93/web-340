var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://admin:Password1!@ems-rfwnt.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log('Application connected to mLab MongoDB instance');
});

var app = express ();

app.use(logger('dev'));

http.createServer(app).listen(8080, function() {
    console.log('Application started on port 8080');
});