/*
============================================
; Title:  townsend-exercise-1.3
; Author: Professor Krasso
; Date:   19 February 2019
; Modified By: Ethan Townsend
; Description:  Assignment 1.3
;===========================================
*/


var url = require('url');

// assigning the url to the parsedURL variable
var parsedURL = url.parse('https://www.example.com/profile?name-townsend');

//console.log the "https" portion of the URL
console.log(parsedURL.protocol);

// console.log the "www.example" portion of the URL
console.log(parsedURL.host);

// console.log the "name-townsend" portion of the URL
console.log(parsedURL.query);

