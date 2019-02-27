/*
============================================
; Title:  townsend-exercise-2.2
; Author: Professor Krasso
; Date:   26 February 2019
; Modified By: Ethan Townsend
; Description:  Assignment 2.2
;===========================================
*/

// requiring the express and http modules
var express = require('express');
var http = require('http');

// assigning the express function to a variable
var app = express();

app.use(function(request, response){
    console.log('In comes a request to: ', request.url);

    response.end('Hello World\n');
})

// creating my server
http.createServer(app).listen(3000, function() {
    console.log('Application started on port: ', 3000);
});