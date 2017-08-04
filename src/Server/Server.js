var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
//var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3001;

var app = express();

//mongoose.connect('mongodb://localhost/mongoData');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../build')));

// app.get('/parentStories', function(req,res,next) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(JSON.stringify([{
//             "user" : "hanan",
//             "post" : "my boring post"
//         },
//         {
//             "user" : "some one",
//             "post" : "not as boring"
//         }
//     ])
//     )
//
// });
// app.put('/parentStories', function(req,res,next) {
//     //res.writeHead(200, { 'Content-Type': 'text/plain' });
//     console.log(req);
//     var data = {
//         "user" : "hanan",
//         "post" : "my boring post"
//     };
//     var parentPost = new ParentPosts(data);
//     parentPost.save();
//     /*[{
//             "user" : "hanan",
//             "post" : "my boring post"
//         },
//         {
//             "user" : "some one",
//             "post" : "not as boring"
//         },
//         {
//             "user" : "no one",
//             "post" : 'who cares'
//         }
//         ]
//     )
// */
// });
// app.get('/activities/:activity',function(req,res,next) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//
//     var partialPath = path.join('../images/activities', req.params.activity);
//     var myPath = path.join(__dirname,partialPath);
//
//     fs.readdir(myPath,function (err,files) {
//         if (err) console.error(err);
//
//         res.end(JSON.stringify(files))}
//     );
//
// });
// app.get('/groups/:group',function(req,res,next) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     console.log(req.params.group);
//     var myPath = path.join(__dirname,'../images/kidsPics', req.params.group);
//
//     fs.readdir(myPath,function (err,files) {
//         if (err) console.error(err);
//
//         res.end(JSON.stringify(files))}
//     );
//
// });
app.get('/',function(req,res,next) {

    res.sendFile(path.join(__dirname + '../../../build/index.html'));

});

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});