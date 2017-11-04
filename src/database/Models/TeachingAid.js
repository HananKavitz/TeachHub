var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var teachingAid = new Schema({
	files : [String],// path to files in db
	subject : [String],
	title : {type:String , required :true},
	description : String,
	rating : {type: Number,min : 0,max : 5},
	likes : Number,
	comments : [{type : Schema.Types.ObjectId,
					ref : 'Comments'
	}],
	creator : {type : Schema.Types.ObjectId,
				required:true,
				ref : 'userAccount'
	},
	editors : [{type : Schema.Types.ObjectId,
				ref : 'userAccount'
	}],
	tags : [String],
	language : String,
	forGrades : [String]
	},
	{timestamps:true

});


module.exports = mongoose.model('TeachingAid', teachingAid);
