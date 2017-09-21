import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class MyNav extends Component {

    render() {

        const log = this.props.isLogedIn ?
            <Link to={'Logout'}>
                <span className="glyphicon glyphicon-log-out" aria-hidden="true"> Logout </span>
            </Link> :
            <Link to={'Login'}>
                <span className="glyphicon glyphicon-log-in" aria-hidden="true"> Login </span>
            </Link>;

        const registerLink =
            <div>
                <Link to={'Signin'}>
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"> Register</span>
                </Link>

            </div>;

        const editPorfileLink =
            <Link to={'EditProfile'}>
                <span className="glyphicon glyphicon-user" aria-hidden="true"> {this.props.userName}</span>
            </Link>
        const registerOrEditProfile = this.props.isLogedIn ?  editPorfileLink : registerLink;

        let eventKey = 0;
        return (

            <div className='container'>
                <div className="row row-content col-xs-12">

                    <Navbar fixedTop={true} collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to={'home'}></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={eventKey}>
                                    <Link to={'Home'}><span className="glyphicon glyphicon-home " aria-hidden="true"/>
                                    </Link>
                                </NavItem>
                                <NavItem eventKey={eventKey++}>
                                    <Link to={'Teachers'}>
                                        Teachers
                                    </Link>
                                </NavItem>
                                <NavItem eventKey={eventKey++}>
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
                                    <span className="glyphicon glyphicon-search text-primary" style={{"color":"lightblue"}}
                                        aria-hidden="true" onClick = {(searchObj,e)=> console.log("search button clicked")}>
                                        <input type="text" placeholder="Search" id="search" />
                                    </span>
                                </NavItem>
                                <NavItem eventKey={eventKey++}>

                                    {registerOrEditProfile}
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
