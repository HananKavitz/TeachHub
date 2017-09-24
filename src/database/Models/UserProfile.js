var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teachingAid = require('./TeachingAid')
var sexs = ['Male','Female'];
var userProfile = new Schema({
    username: {type:String,required:true},
	profileImage: String,//need to be path to images db
	interests : [String],
	ImTeaching : [String],
	createdTeachingAids :[{type:teachingAid}],
	updatedTeachingAids : [{type:teachingAid}],
	aboutMe : String,
	mySchools : [String],
	mySex : {type:String , enum : sexs},

});


module.exports = mongoose.model('UseeProfile', userProfile);
