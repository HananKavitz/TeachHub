var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var router = require('./Routes/Routes');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
//var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3001;

var app = express();

//mongoose.connect('mongodb://localhost/mongoData');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../../build')));
app.use('/', router);

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
