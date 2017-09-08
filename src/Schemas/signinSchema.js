
module.exports = {
    signinSchema : {
		title: "Sign in now",
		type: "object",
		required: ["username","password","email"],
		properties: {
			username: {type: "string", username: "User name", default: ""},
			email: {type: "string",format: "email",default: ""},
			password: {type: "string", title: "Password", default: "",minLength: 6}

		}
	},
	signinUiSchema : {
		password:{
			"ui:widget": "password"
		}

	}
}
