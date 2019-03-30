/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   27 March 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Home Page'
    });
});

app.get('/list', function(req, res) {
    res.render('list', {
        message: 'Employee List'
    });
});

app.get('/new', function(req, res) {
    res.render('new', {
        message: "New Employee"
    });
});

app.get('/view', function(req, res) {
    res.render('view', {
        message: 'view'
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Application started on port 3000');
});