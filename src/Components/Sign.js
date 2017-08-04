import React, {Component} from 'react';
import {Image, FormGroup, Col, Button, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';


class Sign extends Component {
    constructor(props){
        super(props);
        this.signinPB = this.signinPB.bind(this);
    }
    signinPB(evt) {
        evt.preventDefault();
        console.log("button pushed - joy");

    }

    render() {

        //Image and image chooser
        let myImage = (
            <div className="col-xs-9 col-sm-5">
                <Image src="./static/images/avatar_placeholder-9a2f53db6270aa02b5ae2c5af1ffc72b.svg" responsive/>
                <FormGroup controlId="formControlsFile">
                    <ControlLabel>{"Your pretty face"}</ControlLabel>
                    <FormControl type="file"/>
                </FormGroup>

            </div>);


        //submit button
        let submitButton = (
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                    <Button type="submit" onClick = {this.signinPB}>
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

                        <FormControl type="text" placeholder="E-mail" id = "myEmail"/>
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
            <div className="containers row">

                <FormGroup controlId="formControlsMySex">
                    <ControlLabel>My sex</ControlLabel>
                    <FormControl componentClass="select" multiple>
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
        let myInterests = (
            <FormGroup controlId="formControlsSelectMyInterests">
                <ControlLabel>My interests</ControlLabel>
                <FormControl componentClass="select" multiple>
                    <option value="select">Math</option>
                    <option value="select">Science</option>
                    <option value="other">Bible</option>

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

        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">

                        <h2>Sign in now</h2>
                        <form>

                            {email}

                            {/*Password*/}
                            {myPassword}

                            {myImage}

                            {myName}
                            {mySexPlease}

                            {myInterests}

                            {aboutMe}

                            {submitButton}
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sign;
