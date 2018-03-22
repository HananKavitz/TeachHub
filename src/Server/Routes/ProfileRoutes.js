var express = require('express')
var router = express.Router()
var UserAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');
var multer  = require('multer');
var fs ,{ sep } = require('fs');

router.put('/ProfileData' , Verify.verifyOrdinaryUser , function(req,res,next) {
    
    const message = req.body;
    
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});
    const accountID = decodedUser.payload._id;
    UserProfile.findOne({userID:accountID},function (err,userProfile){
        if (err){
            //some error with database
            res.status(500).
            json({status: 'Failed to update user profile'});
            return
        }
        
        userProfile.userID = accountID;
        userProfile.mySex = message.mySex;
        userProfile.interests = message.interests;
        userProfile.ImTeaching = message.ImTeaching;
        userProfile.aboutMe = message.aboutMe;
        userProfile.mySchools = message.mySchools;
        userProfile.myCountry = message.myCountry;
        userProfile.gradesITeach = message.gradesITeach;
        console.log(userProfile);

        userProfile.save(function(error){
            console.log(error);
            next(error);
        });
        
    })

    // save avatar image
    const path = sep + 'database' + sep + accountID + sep + 'avatar';
    
    fs.mkdir(path,fs.constants.W_OK,(err) => {
        if (err){
            console.log(err);
            //dir probably already exist
        }
        console.log('Dir ' + path + ' created.');
        
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, path)
            },
            filename: function (req, file, cb) {
              cb(null, file.fieldname)
            }
          });
    
        var upload = multer({storage :storage});
    });
    
    

    res.status(200).
    json({status: 'User profile saved'});

});

router.get('/ProfileData',Verify.verifyOrdinaryUser,function(req,res,next){
    const token = req.headers['x-access-token'];
    const decodedAccount = jwt.decode(token, {complete: true});
    
    UserProfile.findOne({userID : decodedAccount.payload._id} , function(err,userProfile){
        if (err){
            res.status(500).
            json({status: 'Failed to get user profile'});
            return
        }
        //send the user to the client
        res.status(200).
        json({userProfile: userProfile});
    })
});


module.exports = router;