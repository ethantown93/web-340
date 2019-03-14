/*
============================================
; Title:  townsend-exercise-4.3.js
; Author: Professor Krasso
; Date:   13 March 2019
; Description: creating json api's
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

// creating the git request for the customer ID
app.get("/customer/:id", function (req, res)  { 

    var id = (parseInt(req.params.id, 10));
    
    // creating the output values for the request
    res.json({
        firstName: "Ethan",
        lastName: "Townsend",
        email: "email@email.com",
        employee: id
    });
});

// creating local server
http.createServer(app).listen(8080, function () {
    console.log('Application started on port 8080');
});