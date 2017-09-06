import React, { Component } from 'react';
import axios from 'axios';
import EditProfile from '../Components/EditProfile';

export default class EditProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            interests: [],
            ImTeaching : []
        };

        this.fileChooserCallback = this.fileChooserCallback.bind(this);
    }
    componentWillMount(){
        axios.get('/interests')
            .then(function (response) {
                this.setState({interests:  response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

        axios.get('/ImTeaching')
            .then(function (response) {
                this.setState({ImTeaching:  response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }


    fileChooserCallback(evt){
        let input = document.getElementById('myPrettyFace');
        // need to save image to database here
        console.log(input);
        input.src="";
    }

    render(){
        return (
            <EditProfile fileChooserCallback = {this.fileChooserCallback} interests = {this.state.interests}
                ImTeaching = {this.state.ImTeaching}/>
        );
    }
}
