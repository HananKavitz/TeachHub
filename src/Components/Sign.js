import React, {Component} from 'react';
//import {Image, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Form from "react-jsonschema-form";
import {signinSchema,signinUiSchema} from '../Schemas/signinSchema';
import PropTypes from 'prop-types';

export default class Sign extends Component {

    render() {

        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-sm-6 col-xs-12">
                        <Form schema={signinSchema}
                            uiSchema={signinUiSchema}
                            onSubmit={this.props.signinCallback}
                            onError ={this.props.onErrorSubmit} >

                        </Form>
                    </div>
                </div>
            </div>
)



/*
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
            <FormGroup controlId="formControlsMySex">
                <ControlLabel>Gender</ControlLabel>
                <FormControl componentClass="select">
                    <option value="select">Male</option>
                    <option value="select">Female</option>


                </FormControl>
            </FormGroup>
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
            this.props.interests.map(interest =>
                <option value="select"> {interest} </option>
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
                this.props.ImTeaching.map(subject =>
                    <option value="select"> {subject} </option>
                ): null
        );

        let ImTeaching = (
            <FormGroup controlId="formControlsSelectImTeaching">
                <ControlLabel>Currently I'm teaching</ControlLabel>
                <FormControl componentClass="select" multiple>
                    {ImTeachingList}
                </FormControl>
            </FormGroup>
        );

        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">

                        <h2>Sign in now</h2>
                        <form>

                            {email}

                            {/*Password}
                            {myPassword}
                        </form>
                    </div>
                </div>


                <div className="row row-content">
                    <div className="col-xs-12">
                        <form>
                            {myImage}

                            {myName}
                        </form>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-xs-12">
                        <form>

                            {mySexPlease}

                            {aboutMe}
                            {ImTeaching}
                            {myInterests}
                            {submitButton}
                        </form>
                    </div>
                </div>

            </div>
        );*/
    }
}

Sign.propTypes = {
    signinCallback: PropTypes.func.isRequired,
    onErrorSubmit :  PropTypes.func.isRequired
};
