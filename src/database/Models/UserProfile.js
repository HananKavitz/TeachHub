var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sexs = ['Man','Woman'];

var userProfile = new Schema({
    userID: {type : Schema.Types.ObjectId, ref : 'userAccount'},
	profileImage: {type: Buffer},
	interests : [String],
	ImTeaching : [String],
	aboutMe : String,
	mySchools : [String],
	mySex : {type : String , enum : sexs},
	//personalScore : {type : Number , default : 1}, //This needs to =be calculable
	myCountry :{type: String},
	gradesITeach : [String]

	

	},
	{
		timestamps : true
}
);


module.exports = mongoose.model('UserProfile', userProfile);
