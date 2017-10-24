import React, {Component} from 'react';
import Login from '../Components/Login';
import axios from 'axios';

export default class LoginContainer extends Component {
	constructor(props) {
        super(props);

        //methods on this object
		this.loginCallback = this.loginCallback.bind(this);
		this.onErrorSubmit = this.onErrorSubmit.bind(this);
    }

	loginCallback(data){
        // we are sending secret password here!!! not good

		const dataToSend = data.formData;
		const username = dataToSend.username;
		const apiToCall = '/Login';
		
		axios.post(apiToCall,dataToSend)
            .then(function (res) {
				this.props.route.updateLoginCallback(true,username,res.data.token);// let Main know state changed
				window.sessionStorage.setItem("authToken", res.data.token);
				window.sessionStorage.setItem("userName", username);
				this.props.router.push('/Home');// go to Home page
			}.bind(this))
            .catch((error) => {

				alert(dataToSend.username + ' does not exist or wrong password')
				console.log('error',error);
            });

	}
	onErrorSubmit(err){
        console.error(err);
    }

	render(){
		return <Login loginCallback = {this.loginCallback} onErrorSubmit = {this.onErrorSubmit}/>;
	}
};
