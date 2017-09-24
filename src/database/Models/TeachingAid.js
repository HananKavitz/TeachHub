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
	rating : {type: Number,min : 1,max : 5},
	likes : Number,
	comments : [{type : comment}],
	createdOn :   {type : Date,default : Date.now},
	lastUpdated : {type : Date,default : Date.now},
	creator : {Schema.Types.ObjectId, required:true},
	editors : [Schema.Types.ObjectId],

});


module.exports = mongoose.model('TeachingAid', teachingAid);
