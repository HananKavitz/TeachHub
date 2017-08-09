import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {loged_in: false};
    }

    render() {
        const log = this.state.loged_in ?
            <Link to={'Logout'}>
                <span className="glyphicon glyphicon-log-out" aria-hidden="true"/> Logout
            </Link> :
            <Link to={'Login'}>
                <span className="glyphicon glyphicon-log-in" aria-hidden="true"/> Login
            </Link>;

        const signin = this.state.loged_in ? null :
            <div>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
                <Link to={'Signin'}>
                    Sign in
                </Link>
            </div>;
        let eventKey = 1;
        return (
            <div className='container'>
                <div className="row row-content col-xs-12">

                    <Navbar fixedTop={true}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to={'home'}></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={eventKey}>
                                    <Link to={'Home'}><span className="glyphicon glyphicon-home "
                                                            aria-hidden="true"/>
                                    </Link>
                                </NavItem>
                                <NavItem eventKey={eventKey}>
                                    <Link to={'TeachingAids'}>
                                        Teaching Aids
                                    </Link>
                                </NavItem>

                                <NavItem eventKey={eventKey++}>
                                    <Link to={'About'}>
                                        About
                                    </Link>
                                </NavItem>

                                <NavItem eventKey={eventKey++}>
                                    <Link to={'Contact'}>
                                        Contact
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={eventKey++}>

                                    {signin}
                                </NavItem>

                                <NavItem eventKey={eventKey++}>
                                    {log}
                                </NavItem>


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

        );
    };
};
