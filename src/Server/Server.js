var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var router = require('./Routes/Routes');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3001;

var app = express();

//mongoose.connect('mongodb://localhost/mongoData');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../../build')));
app.use('/', router);


// passport config
var userAccount = require('../database/Models/userAccount');
passport.use(new LocalStrategy(userAccount.authenticate()));
passport.serializeUser(userAccount.serializeUser());
passport.deserializeUser(userAccount.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/27017/TeachhubDataBase');

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
