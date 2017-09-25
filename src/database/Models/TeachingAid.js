var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var teachingAid = new Schema({
    files : [String],// path to files in db
	title : {type:String , required :true},
	description : String,
	rating : {type: Number,min : 1,max : 5},
	likes : Number,
	comments : [Schema.Types.ObjectId],
	createdOn :   {type : Date,default : Date.now},
	lastUpdated : {type : Date,default : Date.now},
	creator : {Schema.Types.ObjectId, required:true},
	editors : [Schema.Types.ObjectId],
	tags : [String],
	version: [String]

});


module.exports = mongoose.model('TeachingAid', teachingAid);
