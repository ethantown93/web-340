/*
============================================
; Title:  townsend-exercise-2.4
; Author: Professor Krasso
; Date:   27 February 2019
; Modified By: Ethan Townsend
; Description:  Assignment 2.4
;===========================================
*/

// calling the http, express, and path modules
var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

// tell express which directory views is located in
app.set("views", path.resolve(__dirname, "views"));

// telling express to use the EJS engine
app.set('view engine', 'ejs');

// setting the vairables for when someone requests the root directory (using index.ejs as the view)
app.get('/', function(request, response){
    response.render('index', {
        firstName: 'Ethan',
        lastName: 'Townsend, ',
        address: 'San Diego California',
        title: 'Ethan\s World'
    });
});

// creating my server
http.createServer(app).listen(3000, function(){
    console.log('Ejs-Views app started on port 3000.');
});
