var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var router = require('./Routes/Routes');

//var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3001;

var app = express();

//mongoose.connect('mongodb://localhost/mongoData');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../build')));
app.use('/', router);

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
