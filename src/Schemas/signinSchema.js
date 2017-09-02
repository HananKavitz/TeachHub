
module.exports = {
    signinSchema : {
		title: "Sign in now",
		type: "object",
		required: ["title","password"],
		properties: {
			title: {type: "string", title: "User name", default: ""},
			Email: {type: "string",format: "email",default: ""},
			password: {type: "string", title: "Password", default: "",minLength: 6}

		}
	},
	signinUiSchema : {
		password:{
			"ui:widget": "password"
		}

	}
}
