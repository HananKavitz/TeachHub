import React, { Component } from 'react';
import axios from 'axios';
import {Image, FormGroup, ControlLabel, FormControl,Col,Button,InputGroup} from 'react-bootstrap';

export default class EditProfile extends Component {



    render(){
        //Image and image chooser
        let myImage = (
            <div className="col-xs-9 col-sm-5">
                <Image id ="myPrettyFace" src="./static/images/avatar_placeholder-9a2f53db6270aa02b5ae2c5af1ffc72b.svg" responsive/>
                <FormGroup id="formControlsFile">
                    <ControlLabel>{"Your pretty face"}</ControlLabel>
                    <FormControl type="file" accept=".jpg, .jpeg, .png"
                                 id="image_uploads"
                                 onChange = {this.fileChooserCallback}/>
                </FormGroup>

            </div>);
            //submit button
            let submitButton = (
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        <Button className="success" type="submit" onClick={this.signinPB}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>);


            //Email
            let email = (
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={5}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-envelope" aria-hidden="true">

                                </i>

                            </InputGroup.Addon>

                            <FormControl type="text" placeholder="E-mail" id="myEmail"/>
                        </InputGroup>
                    </Col>
                </FormGroup>);

            // my name
            let myName = (
                <FormGroup controlId="formHorizontalMyName">
                    <Col componentClass={ControlLabel} sm={5}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-user" aria-hidden="true">
                                </i>
                            </InputGroup.Addon>

                            <FormControl type="text" placeholder="My name"/>
                        </InputGroup>
                    </Col>
                </FormGroup>
            );

            // my sex
            let mySexPlease = (
                <div className="col-xs-6 col-sm-3">
                    <FormGroup controlId="formControlsMySex">
                        <ControlLabel>Gender</ControlLabel>
                        <FormControl componentClass="select">
                            <option value="select">Male</option>
                            <option value="select">Female</option>


                        </FormControl>
                    </FormGroup>
                </div>
            );

            // Password
            let myPassword = (
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={5}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-key" aria-hidden="true">

                                </i>
                            </InputGroup.Addon>

                            <FormControl type="text" placeholder="Password"/>
                        </InputGroup>
                    </Col>
                </FormGroup>

            );

            // my interests
            let allInterests = (this.props.interests ?
                this.props.interests.map((interest,key) =>
                    <option value="select" key = {key}> {interest} </option>
                ): null
            );

            let myInterests = (
                <FormGroup controlId="formControlsSelectMyInterests">
                    <ControlLabel>My interests</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        {allInterests}
                    </FormControl>
                </FormGroup>
            );

            // About me
            let aboutMe = (
                <FormGroup controlId="formControlsAboutMe">
                    <ControlLabel>About me</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="I am..."/>
                </FormGroup>
            );
            // currently I'm teaching
            let ImTeachingList = (this.props.ImTeaching ?
                    this.props.ImTeaching.map((subject,key) =>
                        <option value="select" key = {key}> {subject} </option>
                    ): null
            );

            let ImTeaching = (
                <FormGroup controlId="formControlsSelectImTeaching">
                    <ControlLabel>Currently I am teaching</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        {ImTeachingList}
                    </FormControl>
                </FormGroup>
            );

            let mySchools = (
                <FormGroup controlId="formControlsSelectImTeaching">
                    <ControlLabel>School I'm teaching in</ControlLabel>
                    <FormControl componentClass="text" placeholder = "My school">
                    </FormControl>
                </FormGroup>
            );

            return (

                <div className="container">
                    <br/>
                    <br/>

                    <form>
                        <div className="row row-content">
                            <div className="col-xs-12">

                                    {myImage}

                                    {myName}


                                    {mySexPlease}
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-xs-12">
                                    {aboutMe}
                                    {ImTeaching}
                                    {myInterests}
                                    {mySchools}
                                    {submitButton}

                            </div>
                        </div>
                    </form>
                </div>
            );
    }
}
