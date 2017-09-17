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
    }

	loginCallback(data){
        // we are sending secret password here!!! not good
        axios.post('/Login',data.formData)
            .then(function (res) {
                console.log(res);
                this.setState({isLogedIn : true});

            }.bind(this))
            .catch(function (error) {
                console.log(error);
                });
}
	onErrorSubmit(err){
        console.error(err);
    }

	render(){
		return <Login loginCallback = {this.loginCallback} onErrorSubmit = {this.onErrorSubmit}/>
	}
};
