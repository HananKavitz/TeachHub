var express = require('express');
var router = express.Router();
var TeachingAidDB = require('../../database/Models/TeachingAid');
var userAccount = require('../../database/Models/userAccount');
var Verify = require('./Verify');
var jwt = require('jsonwebtoken');
var languages = require('../../database/Languages');
var grades = require('../../database/Grades');

router.post('/New',Verify.verifyOrdinaryUser,function(req,res,next){
    const message = req.body;

    const token = req.headers['x-access-token'];
    const decodedAccount = jwt.decode(token, {complete: true});
    
    var teachingAid = new TeachingAidDB;
    teachingAid.creator = decodedAccount.payload._id;
    teachingAid.editors = decodedAccount.payload._id;
    teachingAid.subject = message.subject;
    teachingAid.title   = message.title;
    teachingAid.description = message.description;
    teachingAid.likes   = 0;
    teachingAid.rating  = 0;
    teachingAid.tags    = message.tags;
    teachingAid.language  = message.language;
    teachingAid.forGrades = message.forGrade;
    
    teachingAid.save(function(err){
        if (err){
            res.status(500).
                json({status: 'Failed to save teaching aid for user ' +  decodedAccount.payload._id});
            
        }
       
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
    const message = req.body;

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
        
        // need to verify the user has the credentials to update this speciic teaching aid
        const ind = teachingAid.editors.indexOf(decodedAccount.payload._id);
        if (!ind){
            res.status(403).
                json('You are not allowed to edit teaching aid ' + requastedTeachingAidID);
            return
        }
        
        // the user is autorized to save 
        
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
   
    
    let requastedTeachingAidID = req.params.TeachingAidID;
    TeachingAidDB.findById(requastedTeachingAidID,function(err,teachingAid){
        if (err){
            res.status(404).
                json({status : 'Could\'nt find teaching aid ' + requastedTeachingAidID})
            return
        }
        // need to verify the user has the credentials to update this speciic teaching aid
        const ind = teachingAid.editors.indexOf(decodedAccount.payload._id);
        if (!ind){
            res.status(403).
                json('You are not allowed to delete teaching aid ' + requastedTeachingAidID);
            return
        }

        teachingAid.remove(function(err){

            res.status(500).
                json({status : 'Failed deleting teaching aid ' + requastedTeachingAidID})
        })

        res.status(200).
            json({status : 'Teaching aid ' + requastedTeachingAidID + 'is deleted'});
    })
});

router.get('/languages',function(req,res,next){
    res.status(200).
    json({
        languages: languages.languages
    })
})

router.get('/grades',function(req,res,next){
    res.status(200).
    json({
        grades: grades.grades
    })
})

module.exports = router;