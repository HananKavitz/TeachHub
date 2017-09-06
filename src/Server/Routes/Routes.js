var express = require('express')
var router = express.Router()
var interests = require('../../database/Interests');

router.get('/interests', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(interests.interests)
    )

});

router.get('/ImTeaching', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(interests.interests)
    )

});
router.post('/signin', function(req,res,next){
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Signed in");

});

router.post('/Login', function(req,res,next){
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Loged in");

});

router.get('/',function(req,res,next) {

    res.sendFile(path.join(__dirname + '../../../../build/index.html'));

});



module.exports = router;
