var express = require('express');
var router = express.Router();
var TeachingAidDB = require('../../database/Models/TeachingAid');
var userAccount = require('../../database/Models/userAccount');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');


router.post('/New',Verify.verifyOrdinaryUser,function(req,res,next){
    const token = req.headers['x-access-token'];
    const decodedAccount = jwt.decode(token, {complete: true});
    
    TeachingAidDB.save({userID : decodedAccount.payload._id} , function(err,teachingAid){
        if (err){
            res.status(500).
                json({status: 'Failed to get user profile'});
            return
        }
        //save teaching aid to server
        res.status(200).
            json({success: 'Teaching Aid ' + teachingAid + ' is saved'});
    })
});

router.get('/TeachingAid/:TeachingAidID',function(req,res,next){
    TeachingAidDB.findById(req.params.TeachingAidID,function(err,teachingAid){
        if (err){
            res.status(404).
                json({status : 'Could\'nt find teaching aid ' + req.params.TeachingAidID})
            return
        }
        res.status(200).
            json({teachingAid : teachingAid});
    })
});

module.exports = router;