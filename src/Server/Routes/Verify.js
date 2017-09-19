//var userAccount = require('../../database/Models/userAccount');
var jwt = require('jsonwebtoken');
var config  = require('../../Config/BackEndConfig');

exports.getToken = function (user) {
	try{
		console.log(user);
		const token = JSON.stringify(user);
		//const token = jwt.sign(JSON.stringify(user), config.secretKey);
	}
	catch(err){
		console.log(err);
	}
	
	return token;
};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secretKey, function (err, decoded) {
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};
