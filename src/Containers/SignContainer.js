import React, {Component} from 'react';
import Sign from '../Components/Sign';
import EditProfile from '../Components/EditProfile';
import axios from 'axios';

class SignContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigned: false
        };
        this.signinCallback = this.signinCallback.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);

    }



    signinCallback(type) {

        // we are sending secret password here!!! not good
        axios.post('/signin',type.formData)
            .then(function (res) {

                this.setState({isSigned : true});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    onErrorSubmit(err){
        console.error(err);
    }

    render() {

        let sign = this.state.isSigned ? <EditProfile />:
            <Sign signinCallback = {this.signinCallback} onErrorSubmit = {this.onErrorSubmit} />;

            console.log(this);
        return (
            sign

        )
    }
}

export default SignContainer;
