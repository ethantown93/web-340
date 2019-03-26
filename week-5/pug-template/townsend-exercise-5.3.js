/*
============================================
; Title:  townsend-exercise-5.3.js
; Author: Professor Krasso
; Date:   20 March 2019
; Description: Demonstrates the Pug view engine.
;===========================================
*/

var express = require('express');
var http = require('http');
var pug = require('pug');
var path = require('path');

var app = express();

// setting the route to the views directory
app.set('views', path.resolve(__dirname,'views'));

//specifying to express that we want to use the pug view engine
app.set('view engine', 'pug');

// rendering our content to index.pug
app.get('/', function(req, res) {
    res.render('index', {
        message: "This is my Pug based homepage!"
    });
});


// creating our server on port 3000
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000');
});