var express = require('express')
var router = express.Router()
var UserAccount = require('../../database/Models/userAccount');
var UserProfile = require('../../database/Models/UserProfile');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');

router.put('/ProfileData',Verify.verifyOrdinaryUser,function(req,res,next) {
    
    const message = req.body;
    
    const token = req.headers['x-access-token'];
    const decodedUser = jwt.decode(token, {complete: true});

    UserAccount.findById(decodedUser.payload._id , function(err,userAccount){
        if (err){
            //some error with database
            res.status(500).
            json({status: 'Failed to update user profile'});
            return
        }
        if (!userAccount){
            // user doesn't exist yet
            res.status(500).
            json({status: 'User doesn\'t exist'});
            return
        }

        UserProfile.findOne({userID:userAccount._id},function (err,userProfile){
            if (err){
                //some error with database
                res.status(500).
                json({status: 'Failed to update user profile'});
                return
            }
            if (!userProfile){
                let userProfile = new UserProfile;
            }
            userProfile.userID = userAccount._id;
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
            // res.status(200).
            // json({status: 'User profile saved'});
        })

    })  
    

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


function updateUserProfile(userProfile,userAccountID){
    
}

module.exports = router;