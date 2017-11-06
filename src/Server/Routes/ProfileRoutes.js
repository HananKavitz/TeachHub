var express = require('express')
var router = express.Router()
var UserAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');


router.put('/ProfileData',Verify.verifyOrdinaryUser,function(req,res,next) {
    
    const message = req.body;
    
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});
    const userAccountID = decodedUser.payload._id;
    UserProfile.findOne({userID:userAccountID},function (err,userProfile){
        if (err){
            //some error with database
            res.status(500).
            json({status: 'Failed to update user profile'});
            return
        }
        
        userProfile.userID = userAccountID;
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
        
        const path = '/database/' + userAccountID;
        fs.mkdir(path,function(err){
            if (err){
                // maybe dir exist
            }
        });

        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, path)
            },
            filename: function (req, file, cb) {
              cb(null, file.fieldname)
            }
          })
          
        var upload = multer({ storage: storage }).single('profileImage');
        
        upload(req,re,function(err){
            if (err){
                res.status(500).
                json({message : 'Failed saving avatar image'});
                return
            }
            res.status(200).
            json({message : 'Saved avatar image'});
        })
    })


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