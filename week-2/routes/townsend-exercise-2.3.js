/*
============================================
; Title:  townsend-exercise-2.3
; Author: Professor Krasso
; Date:   27 February 2019
; Modified By: Ethan Townsend
; Description:  Assignment 2.3
;===========================================
*/

// requiring the express and http modules
var express = require('express');
var http = require('http');

// assigning the express function to the app variable
var app = express();

// creating our route interceptors to intercept URL messages
app.get('/', function(request, response) {
    response.end('Welcome to the homepage!');
});

app.get('/about', function(request, response) {
    response.end('Welcome to the about page!');
});

app.get('/contact', function(request, response) {
    response.end('Welcome to the contact page!');
});

// creating a route interceptor for bad requests.
app.use(function(request, response) {
    response.statusCode = 404;
    response.end('404!');
});

http.createServer(app).listen(8080, function() {
    console.log('Application started on port:', 8080);
});