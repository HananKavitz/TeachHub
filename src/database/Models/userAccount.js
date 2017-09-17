var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userAccount = new Schema({
    username: String,
	email: String,
    password: String,
    admin:{
        type:Boolean,
        default: false
    }
});

userAccount.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', userAccount);
