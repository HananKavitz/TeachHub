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

    }

	loginCallback(){

		console.log('clicked');
	}

	render(){
		return <Login loginCallback = {this.loginCallback}/>
	}
};
