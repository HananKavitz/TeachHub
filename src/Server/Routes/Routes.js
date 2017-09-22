var express = require('express')
var router = express.Router()
var interests = require('../../database/Interests');
var userAccount = require('../../database/Models/userAccount');
var passport = require('passport');
var Verify = require('./Verify');


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

router.post('/register', function(req,res,next){
    userAccount.register(
        new userAccount({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email}),
            req.body.password,
            function(err, account) {
                if (err) {
                    return res.status(500).
                    json({ err : err });
                }

                passport.authenticate('local')(req, res, function () {
                    return res.status(200).
                    json({ status: 'Successful registration!!' });
                });
            });

});

router.post('/Login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }

      const token = Verify.getToken(user);
      //const token = JSON.stringify(user);
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.post('/Logout', function(req,res,next){
    req.logout();
    res.status(200).
    json({
        status: 'Nice knowing you'
    });
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
