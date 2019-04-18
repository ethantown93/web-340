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
        title: 'EMS | Home'
    });
});

app.get('/list', function(req, res){
    Employees.find({}, function(err, employees){
        if(err){ throw err; 
        } else {
        res.render('list', {
            title: 'EMS | Employee Data', 
            employees: employees
        })
    };
});
});

app.get('/new', function(req, res) {
    res.render('new', {
        title: "EMS | New Employee"
    });
});

app.get('/view', function(req, res) {
    res.render('view', {
        title: 'EMS | View'
    });
});

app.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'EMS | Contact'
    });
    
});

app.get('/about', function(req, res) {
    res.render('about',{
        title: 'EMS | About'
    });
});

//post requests that processes form submissions and saves them to the database.

app.post('/process', function(req, res) {
    // console.log(request.body.txtName);
    if (!req.body.firstName) {
        res.status(400).send('Entries must have a first name.');
        return;
    } else if(!req.body.lastName) {
        res.status(404).send('Entries must have a last name.')
        return;
    } else if(!req.body.email) {
        res.status(400).send('Entries must have an email.')
        return;
    } else if(!req.body.id) {
        res.status(400).send('Entries must have an employee ID.')
        return;
    }

    // get the request's form data
    const firstName = req.body.firstName;
    console.log(firstName);
    const lastName = req.body.lastName;
    console.log(lastName)
    const email = req.body.email;
    console.log(email)
    const ID = req.body.id;
    console.log(ID)
  
    // create a fruit model
    let employees = new Employees({
      first: firstName,
      last: lastName,
      email: email,
      ID: ID

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

  app.get('/view/:queryName', function(req, res) {
    const queryName = req.params['queryName'];
    
    Employees.find({'first': queryName}, function(err, employees) {
        if(err) {
            console.log(err);
            throw err;
        } else {
            console.log(employees);

            if(employees.length > 0) {
                res.render('view', {
                    title: 'EMS | View',
                    employee: employees
                })
            } else {
                res.redirect('/');
            }
        }
    })
});
  

// server creation

http.createServer(app).listen(3000, function(){
    console.log('Application started on port 3000');
});
