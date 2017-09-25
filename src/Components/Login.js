import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import {Form, FormGroup, Col, Button, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router';
import Form from "react-jsonschema-form";
import {loginSchema} from '../Schemas/LoginSchema';

export default class Login extends Component {
    render() {

       
        const loginUiSchema = {
            "password" : {
                "ui:widget" : "password"
            },
            "forgotPassword" :{
                "ui:widget": (props)=>{
                return (
                    <Link to = {'PasswordRestore'}>
                        {props.value}
                    </Link>
                );
            }
        }
        };
        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-sm-6 col-xs-12">
                        <Form schema={loginSchema}
                            uiSchema={loginUiSchema}
                            onSubmit={this.props.loginCallback}
                            onError ={this.props.onErrorSubmit} >

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}


Login.propTypes = {
    loginCallback : PropTypes.func.isRequired,
    onErrorSubmit : PropTypes.func.isRequired
}
