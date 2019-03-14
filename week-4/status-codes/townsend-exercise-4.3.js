/*
============================================
; Title:  townsend-exercise-4.3.js
; Author: Professor Krasso
; Date:   13 March 2019
; Description: using status codes
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

// creating out get request for status code 404
app.get('/not-found', function(req, res){
    res.status(404);
    res.json({
        error: "404 Page not found."
    })
});

// creating out get request for status code 200
app.get('/ok', function(req, res) {
    res.status(200);
    res.json({
        message: "200 Page found"
    })
});

// creating out get request for status code 501
app.get('/not-implemented', function(req, res) {
    res.status(501);
    res.json({
        error: "501 Page not created."
    })
});

// creating our local server
http.createServer(app).listen(3000, function(){
    console.log('Application started on port 3000');
});