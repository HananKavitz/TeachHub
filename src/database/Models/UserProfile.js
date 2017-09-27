var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sexs = ['Man','Woman'];

var userProfile = new Schema({
    username: {type:String,required:true},
	profileImage: String,//need to be path to images db
	interests : [String],
	ImTeaching : [String],
	createdTeachingAids : [Schema.Types.ObjectId],
	updatedTeachingAids : [Schema.Types.ObjectId],
	aboutMe : String,
	mySchools : [String],
	mySex : {type : String , enum : sexs},
	//personalScore : {type : Number , default : 1}, //This needs to =be calculable
	country :{type: String,required:true},
	classesITeach : [String]

	

});


module.exports = mongoose.model('UserProfile', userProfile);
