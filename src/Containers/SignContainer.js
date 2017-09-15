import React, {Component} from 'react';
import Sign from '../Components/Sign';
import EditProfileContainer from './EditProfileContainer';
import axios from 'axios';
import UserAlreadyExist from '../Components/UserAlreadyExist';

class SignContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigned: false,
            userAlreadyExist: false
        };

        //methods on this object
        this.signinCallback = this.signinCallback.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.toggleUserExist = this.toggleUserExist.bind(this);
    }



    signinCallback(type) {

        // we are sending secret password here!!! not good
        axios.post('/register',type.formData)
            .then(function (res) {
                console.log(res);
                this.setState({isSigned : true});

            }.bind(this))
            .catch(function (error) {
                console.log(error);
                console.log("got 404");
                this.setState({userAlreadyExist : true})
            }.bind(this));

    }

    onErrorSubmit(err){
        console.error(err);
    }

    toggleUserExist(){
        this.setState({userAlreadyExist : false});
    }

    render() {

        let sign = this.state.isSigned ? <EditProfileContainer />:
            <Sign signinCallback = {this.signinCallback} onErrorSubmit = {this.onErrorSubmit} />;

        sign = this.state.userAlreadyExist ? <UserAlreadyExist toggleUserExist = {this.toggleUserExist}/> : sign;

        return (
            sign

        )
    }
}

export default SignContainer;
