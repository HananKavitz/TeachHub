var express = require('express')
var router = express.Router()
var interests = require('../../database/Interests');
var userAccount = require('../../database/Models/userAccount');
var passport = require('passport');

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
    userAccount.register(
        new userAccount({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email}),
            req.body.password,
            function(err, account) {
                if (err) {
                    console.log('error',err);
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                }

                passport.authenticate('local')(req, res, function () {
                    console.log('success');
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                });
            });

});

router.post('/Login', function(req,res,next){
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Loged in");

});

router.post('/Logout', function(req,res,next){
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Loged out");

});

router.put('/EditProfileData',function(req,res,next) {

    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Profile data edited");

});
router.get('/',function(req,res,next) {

    res.sendFile(path.join(__dirname + '../../../../build/index.html'));

});



module.exports = router;
