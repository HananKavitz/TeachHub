import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Col, Button, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Login extends Component {
    render() {

        const loginInstance = (
            <Form horizontal >
                {/*email*/}
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={5}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-envelope" aria-hidden="true">

                                </i>

                            </InputGroup.Addon>

                            <FormControl type="text" placeholder="E-mail"/>
                        </InputGroup>
                    </Col>
                </FormGroup>

                {/*password*/}
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={5}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fa fa-key fa-fw" aria-hidden="true">

                                </i>
                            </InputGroup.Addon>

                            <FormControl type="password" placeholder="Password"/>
                        </InputGroup>
                    </Col>
                </FormGroup>

                {/*password restore*/}
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <Link to={'PasswordRestore'}>
                            I forgot my password
                        </Link>
                    </Col>
                </FormGroup>

                {/*submit button*/}
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        <Button type="submit" onClick= {this.props.loginCallback}>
                            Log in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>

        );
        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>Log in</h2>
                        {loginInstance}

                    </div>
                </div>

            </div>
        );
    }
}


Login.propTypes = {
    loginCallback : PropTypes.func.isRequired
}
