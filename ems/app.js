/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   27 March 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const Employees = require('./models/employees');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

// initializing express

const app = express();

// establishing the connect to MongoDB
const mongoDB = 'mongodb+srv://admin:Password1!@ems-rfwnt.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Application connected to mLab MongoDB instance');
});

//setup csrf protection

var csrfProtection = csrf({ cookie: true });

// use statements

app.use(express.static(__dirname + '/public'));

app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});
  

// set statements

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// get requests

app.get('/', function(req, res) {
    res.render('index', {
        message: 'WEB-340 Employee Records App'
    });
});

app.get('/list', function(req, res){
    Employees.find({}, function(err, employees){
        if(err){ throw err; 
        } else {
        res.render('list', {
            title: 'Employee Data', 
            employees: employees
        })
    };
});
});

app.get('/new', function(req, res) {
    res.render('new', {
        message: "New Employee"
    });
});

app.get('/view', function(req, res) {
    res.render('view', {
        message: 'view'
    });
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/about', function(req, res) {
    res.render('about');
});

//post requests

app.post('/process', function(req, res) {
    // console.log(request.body.txtName);
    if (!req.body.txtName) {
      res.status(400).send('Entries must have a name');
      return;
    }
  
    // get the request's form data
    const firstName = req.body.txtName;
    console.log(firstName);
    const lastName = req.body.txtName1;
    console.log(lastName)
    const email1 = req.body.txtName2;
    console.log(email1)
    const ID1 = req.body.txtName3;
    console.log(ID1)
  
    // create a fruit model
    let employees = new Employees({
      first: firstName,
      last: lastName,
      email: email1,
      ID: ID1

    });
  
    // save
    employees.save(function(err) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(firstName + ' saved successfully!');
        res.redirect('/');
      }
    });
  });

/*
app.post('/process', function(req, res){


    const first = req.body.firstName;
    const last = req.body.lastName;
    const eml = req.body.email;
    const ident = req.body.id;

    let employees = new Employees({
        first: first,
        last: last,
        eml: eml,
        ident: ident
    });
    
    employees.save(function(err){
        if(err) { throw err; 
        } else {
        console.log('Data successfully saved.');
        res.redirect('/');
        }
    });
    
});
*/


// server creation

http.createServer(app).listen(3000, function(){
    console.log('Application started on port 3000');
});
