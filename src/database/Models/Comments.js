var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment = new Schema({
    commentTitle : {type: String , required:true},
	commentText : {type: String , required:true},
    commentCreator : {type: String , required:true},
    likes : Number,
	createdOn : {type : Date , default : Date.now}
});

module.exports = mongoose.model('Comment', comment);
