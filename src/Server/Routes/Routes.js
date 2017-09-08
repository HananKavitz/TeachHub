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

    userAccount.register(new userAccount({ username : req.body.username}),
                                        req.body.password,
                                        function(err, account) {
                                            if (err) {
                                                return res.writeHead(404, { 'Content-Type': 'text/plain' });
                                            }

                                            passport.authenticate('local')(req, res, function () {
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
    res.end("Loged in");

});
router.get('/',function(req,res,next) {

    res.sendFile(path.join(__dirname + '../../../../build/index.html'));

});



module.exports = router;
