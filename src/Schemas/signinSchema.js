
module.exports = {
    signinSchema : {
		title: "Sign in now",
		type: "object",
		required: ["username","password","email"],
		properties: {
			username: {type: "string",title: "User name", default: ""},
			email: {type: "string",format: "email", title : "Email",default: ""},
			password: {type: "string", title: "Password", default: "",minLength: 6}

		}
	},
	signinUiSchema : {
		password:{
			"ui:widget": "password"
		}

	}
}
