var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userAccount = require('./UserAccount');

var comment = new Schema({
	commentText : {type: String, required:true},
	rating : Number,
	likes : Number,
	createdOn : {type : Date,default : Data.now()}
});

var teachingAid = new Schema({
    files : [String],// path to files in db
	title : {type:String, required :true},
	description : String,
	rating : Number,
	likes : Number,
	comments : [{type : comment}],
	createdOn :   {type : Date,default : Date.now()},
	lastUpdated : {type : Date,default : Date.now()},
	creator : {type:userAccount, required:true},
	editors : [{type:userAccount}],

});


module.exports = mongoose.model('TeachingAid', teachingAid);
