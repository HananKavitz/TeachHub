import React, {Component} from 'react';
import Sign from '../Components/Sign';
import axios from 'axios';

class SignContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "isSetImage": false
        };

        axios.get('/interests')
            .then(function (response) {
                this.setState({"interests":  response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (
            <Sign isSetImage={this.state.isSetImage} interests = {this.state.interests}/>
        )
    }
}

export default SignContainer;