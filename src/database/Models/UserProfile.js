var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sexs = ['Male','Female'];
var userProfile = new Schema({
    username: {type:String,required:true},
	profileImage: String,//need to be path to images db
	interests : [String],
	ImTeaching : [String],
	createdTeachingAids : [Schema.Types.ObjectId],
	updatedTeachingAids : [Schema.Types.ObjectId],
	aboutMe : String,
	mySchools : [String],
	mySex : {type:String , enum : sexs},

});


module.exports = mongoose.model('UserProfile', userProfile);
