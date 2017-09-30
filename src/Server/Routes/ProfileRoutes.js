var express = require('express')
var router = express.Router()
var userAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');


router.put('/EditProfileData',Verify.verifyOrdinaryUser,function(req,res,next) {
    console.log(req.body);
    const message = req.body;
    UserProfile.findById(id , function(err,userProfile){
        if (err){
            res.sendStatus(500).
            json({status: 'Failed to update user profile'});
        }

        if (!userProfile){
            userProfile = new UserProfile;// create new user profile
        }
    })

    userProfile.mySex = message.mySex;
    userProfile.myInterests = message.myInterests;
    userProfile.ImTeaching = message.ImTeaching;
    userProfile.aboutMe = message.aboutMe;
    userProfile.mySchools = message.mySchools;
    userProfile.country = message.country;
    userProfile.gradesITeach = message.gradesITeach;

    userAccount.save(function(err){
        console.log(err);
        next(err);
    });
    

    res.sendStatus(200).
    json({status: 'User profile saved'});

});

module.exports = router;