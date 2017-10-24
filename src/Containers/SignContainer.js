import React, {Component} from 'react';
import Sign from '../Components/Sign';
import EditProfileContainer from './EditProfileContainer';
import axios from 'axios';
import UserAlreadyExist from '../Components/UserAlreadyExist';

class SignContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            userAlreadyExist: false
        };

        //methods on this object
        this.registerCallback = this.registerCallback.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.toggleUserExist = this.toggleUserExist.bind(this);
    }



    registerCallback(type) {

        // we are sending secret password here!!! not good
        axios.post('/register',type.formData)
            .then(function (res) {
                console.log(res);
                this.setState({isRegistered : true});

            }.bind(this))
            .catch(function (error) {
                console.error(error);
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

        let sign = this.state.isRegistered ? <EditProfileContainer />:
            <Sign signinCallback = {this.registerCallback} onErrorSubmit = {this.onErrorSubmit} />;

        sign = this.state.userAlreadyExist ? <UserAlreadyExist toggleUserExist = {this.toggleUserExist}/> : sign;

        return (
            sign

        )
    }
}

export default SignContainer;
