var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

// specifying the route to views
app.set('views', path.resolve(__dirname, 'views'));

// telling express to use the views engine
app.set('view engine', 'ejs');

// creating out logger
app.use(logger('short'));

// creating the get request for the employee id
app.get('/:employeeId', function (req, res){
    var employeeId = parseInt(req.params.employeeId, 10);

    // outputting to index.ejs
    res.render('index', {
        employeeId: employeeId
    });
});

// creating the server that will listen on port 8080
http.createServer(app).listen(8080, function () {
    console.log('Application started on port 8080');
});

