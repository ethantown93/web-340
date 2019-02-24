//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 1.3"));
console.log('\n');

/*
============================================
; Title:  townsend-server.js
; Author: Professor Krasso
; Date:   24 February 2019
; Modified By: Ethan Townsend
; Description: creating my first server
;===========================================
*/

//Variable declaration:

var http = require("http");

function processRequest(req, res) {

// server body message
var body = "Hello! And welcome to my very first NodeJs server, created for WEB-340!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080)