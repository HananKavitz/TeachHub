var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var interests = require('../database/Interests');
//var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3001;

var app = express();

//mongoose.connect('mongodb://localhost/mongoData');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/interests', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(interests.interests)
    )

});

app.get('/ImTeaching', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(interests.interests)
    )

});
app.post('/signin', function(req,res,next){
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Signed in");

});


app.get('/',function(req,res,next) {

    res.sendFile(path.join(__dirname + '../../../build/index.html'));

});

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
