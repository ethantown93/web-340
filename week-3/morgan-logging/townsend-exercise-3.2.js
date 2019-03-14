/*
============================================
; Title:  townsend-exercise-3.3.js
; Author: Professor Krasso
; Date:   5 March 2019
; Description: logging requests using morgan
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

// specifying the route to views
app.set('views', path.resolve(__dirname, 'views'));

// telling express to use the view engine
app.set('view engine', 'ejs');

// adding the logger
app.use(logger('short'));

// creating a get request that will return a response
app.get('/', function (req, res){
    res.render('index', {
        message: 'Testing testin 1, 2, 3. This is a test!'});
    });

http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080');
});
