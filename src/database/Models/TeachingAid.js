var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var teachingAid = new Schema({
	files : [String],// path to files in db
	subject : [String],
	title : {type:String , required :true},
	description : String,
	rating : {type: Number,min : 0,max : 5},
	likes : Number,
	comments : [Schema.Types.ObjectId],
	createdOn :   {type : Date,default : Date.now},
	lastUpdated : {type : Date,default : Date.now},
	creator : {type : Schema.Types.ObjectId, required:true},
	editors : [Schema.Types.ObjectId],
	tags : [String],
	version: [String],
	language : String,
	forClasses : [String]


});


module.exports = mongoose.model('TeachingAid', teachingAid);
