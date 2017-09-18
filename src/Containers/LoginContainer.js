import React, {Component} from 'react';
import Login from '../Components/Login';
import axios from 'axios';

export default class LoginContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isLogedIn: false
        };

        //methods on this object
		this.loginCallback = this.loginCallback.bind(this);
		this.onErrorSubmit = this.onErrorSubmit.bind(this);
		console.log(this);
    }

	loginCallback(data){
        // we are sending secret password here!!! not good
		const shouldLog = !this.state.isLogedIn;
		const dataToSend = shouldLog ? data.formData : {};
		const apiToCall = shouldLog ? '/Login' : '/Logout';

		axios.post(apiToCall,dataToSend)
            .then(function (res) {
                console.log(res);
                this.setState({isLogedIn : shouldLog});
				this.props.route.isLogedCallback(shouldLog);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

	}
	onErrorSubmit(err){
        console.error(err);
    }

	render(){
		const loginUI = this.state.isLogedIn ?
			null : <Login loginCallback = {this.loginCallback} onErrorSubmit = {this.onErrorSubmit}/>;
		return loginUI
	}
};
