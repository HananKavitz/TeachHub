var express = require('express')
var router = express.Router()
var userAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');

router.put('/EditProfileData',Verify.verifyOrdinaryUser,function(req,res,next) {
    
    console.log(req.body);
    const message = JSON.parse(req.body);
    
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});

    UserProfile.findById(decodedUser._id , function(err,userProfile){
        if (err){
            res.sendStatus(500).
            json({status: 'Failed to update user profile'});
        }

        userProfile.mySex = message.mySex;
        userProfile.myInterests = message.myInterests;
        userProfile.ImTeaching = message.ImTeaching;
        userProfile.aboutMe = message.aboutMe;
        userProfile.mySchools = message.mySchools;
        userProfile.myCountry = message.myCountry;
        userProfile.gradesITeach = message.gradesITeach;
        console.log(userProfile)
        userAccount.save(function(err){
            console.log(err);
            next(err);
        });
    })

    
    

    res.sendStatus(200).
    json({status: 'User profile saved'});

});

module.exports = router;