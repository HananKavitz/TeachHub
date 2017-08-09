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

        axios.get('/ImTeaching')
            .then(function (response) {
                this.setState({"teaching":  response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

        this.fileChooserCallback = this.fileChooserCallback.bind(this);
    }

    fileChooserCallback(){
        let input = document.querySelector('input');
    };

    
    render() {
        return (
            <Sign isSetImage={this.state.isSetImage} interests = {this.state.interests}
                  ImTeaching = {this.state.teaching} fileChooserCallback = {this.fileChooserCallback}/>
        )
    }
}

export default SignContainer;