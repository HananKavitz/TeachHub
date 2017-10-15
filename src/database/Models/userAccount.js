var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userAccount = new Schema({
    username: {type : String, unique : true,required : true},
	email: {type : String, unique : true},
    password : {type : String, required : true},
    admin:{
        type:Boolean,
        default: false
        }
    },
    {
        timestamps : true
    }
);

userAccount.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', userAccount);
