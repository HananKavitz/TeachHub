import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfile extends Component {
    constructor(props){
        super(props);
        /*
                axios.get('/interests')
                    .then(function (response) {
                        this.setState({interests:  response.data});
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });

                axios.get('/ImTeaching')
                    .then(function (response) {
                        this.setState({teaching:  response.data});
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
        */
        //this.fileChooserCallback = this.fileChooserCallback.bind(this);
    }


    /*fileChooserCallback(){
        let input = document.querySelector('input');
        console.log(input);
    };*/
    render(){
        /*//Image and image chooser
        let myImage = (
            <div className="col-xs-9 col-sm-5">
                <Image src="./static/images/avatar_placeholder-9a2f53db6270aa02b5ae2c5af1ffc72b.svg" responsive/>
                <FormGroup controlId="formControlsFile">
                    <ControlLabel>{"Your pretty face"}</ControlLabel>
                    <FormControl type="file" accept=".jpg, .jpeg, .png"
                                 id="image_uploads"/>
                </FormGroup>

            </div>);
        */
        return (

            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>
                            Edit my profile
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}
