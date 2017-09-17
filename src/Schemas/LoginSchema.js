module.exports = {
    loginSchema : {
		title: "Log in",
		type: "object",
		required: ["password","email"],
		properties: {
			email: {type: "string",format: "email",default: ""},
			password: {type: "string", title: "Password", default: "",minLength: 6}

		}
	},
	loginUiSchema : {
		password:{
			"ui:widget": "password"
		}

	}
}
