var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sexs = ['Man','Woman'];

var userProfile = new Schema({
    username: {type:String,required:true},
	profileImage: String,//need to be path to images db
	interests : [String],
	ImTeaching : [String],
	aboutMe : String,
	mySchools : [String],
	mySex : {type : String , enum : sexs},
	//personalScore : {type : Number , default : 1}, //This needs to =be calculable
	myCountry :{type: String,required:true},
	gradesITeach : [String]

	

	},
	{
		timestamps : true
}
);


module.exports = mongoose.model('UserProfile', userProfile);
