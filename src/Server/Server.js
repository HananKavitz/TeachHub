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
var backEndConfig = require('../Config/BackEndConfig');
var hostname = backEndConfig.serverURL;

var port = backEndConfig.serverPort;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
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
mongoose.connect('mongodb://' + backEndConfig.mongodbURL+ '/' + backEndConfig.mongodbPort + '/TeachhubDataBase');

//development error handling
if (app.get('env')==='development'){
    app.use(function(err,req,res,next){
        res.status(err.status || 500);
        res.json({
            message : err.message,
            error : err
        });
    });
}

//production error handling
//no stacktraces leaked to user
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({
        message : err.message,
        error : {}
    });
});



app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
