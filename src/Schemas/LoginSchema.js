
module.exports = {
    loginSchema : {
		title: "Log in",
		type: "object",
		required: ["username","password"],
		properties: {
			username: {type: "string",title: "User name",default: ""},
			password: {type: "string", title: "Password", default: "",minLength: 6},
			forgotPassword : {type: "string",title: "Forgot your password?",default: "Password restore"}
		}
	}
}
