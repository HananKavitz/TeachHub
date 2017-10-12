var express = require('express')
var router = express.Router()
var userAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');

router.put('/ProfileData',Verify.verifyOrdinaryUser,function(req,res,next) {
    
    const message = req.body;
    
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});

    UserProfile.findById(decodedUser.payload._id , function(err,userProfile){
        if (err){
            res.sendStatus(500).
            json({status: 'Failed to update user profile'});
        }
        if (!userProfile){
            // user doesn't exist yet
            userProfile = new UserProfile;
        }
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


    res.status(200).
    json({status: 'User profile saved'});
    })

    
    

    

});

router.get('/ProfileData',Verify.verifyOrdinaryUser,function(req,res,next){
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});
    UserProfile.findById(decodedUser._id , function(err,userProfile){
        if (err){
            res.sendStatus(500).
            json({status: 'Failed to get user profile'});
        }
        //send the user to the client
        res.sendStatus(200).
        json({userProfile: JSON.stringify(userProfile)});
    })
});

module.exports = router;