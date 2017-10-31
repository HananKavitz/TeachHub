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
            json({success: 'Teaching Aid ' + teachingAid._id + ' is saved'});
    })
});

router.get('/TeachingAid/:TeachingAidID',function(req,res,next){

    
    let requastedTeachingAidID = req.params.TeachingAidID;
    TeachingAidDB.findById(requastedTeachingAidID,function(err,teachingAid){
        if (err){
            res.status(404).
                json({status : 'Could\'nt find teaching aid ' + requastedTeachingAidID})
            return
        }
        res.status(200).
            json({teachingAid : teachingAid});
    })
});

router.put('/TeachingAid/:TeachingAidID',Verify.verifyOrdinaryUser,function(req,res,next){
    const token = req.headers['x-access-token'];
    const decodedAccount = jwt.decode(token, {complete: true});
    // need to verify the user has the credentials to update this speciic teaching aid


    let requastedTeachingAidID = req.params.TeachingAidID;
    TeachingAidDB.findById(requastedTeachingAidID,function(err,teachingAid){
        if (err){
            res.status(404).
                json({status : 'Could\'nt find teaching aid ' + requastedTeachingAidID})
            return
        }

        teachingAid.save(function(err){

            res.status(500).json({status : 'Failed updating teaching aid ' + requastedTeachingAidID})
        })

        res.status(200).
            json({teachingAid : teachingAid});
    })
});

router.delete('/TeachingAid/:TeachingAidID',Verify.verifyOrdinaryUser,function(req,res,next){
    const token = req.headers['x-access-token'];
    const decodedAccount = jwt.decode(token, {complete: true});
    // need to verify the user has the credentials to delete this speciic teaching aid

    
    let requastedTeachingAidID = req.params.TeachingAidID;
    TeachingAidDB.findById(requastedTeachingAidID,function(err,teachingAid){
        if (err){
            res.status(404).
                json({status : 'Could\'nt find teaching aid ' + requastedTeachingAidID})
            return
        }

        teachingAid.save(function(err){

            res.status(500).
                json({status : 'Failed deleting teaching aid ' + requastedTeachingAidID})
        })

        res.status(200).
            json({status : 'Teaching aid ' + requastedTeachingAidID + 'is deleted'});
    })
});

module.exports = router;