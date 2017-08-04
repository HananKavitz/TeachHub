import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {

    render() {

        return (

            <div>
                <footer className="row-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5 col-sm-2 ">
                                <h5>links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to={'Home'}><span className="glyphicon glyphicon-home "
                                                                aria-hidden="true"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'Contact'}>
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'About'}>
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <h5>Adress</h5>
                                <address>
                                    פיקה 20<br/>


                                    ראשון לציון<br/>

                                    <i className="fa fa-phone"/>: 055-8837052

                                    <br/>
                                    <i className="fa fa-envelope"/>:
                                    <a href="mailto:hananke0@gmail.com">hananke0@gmail.com</a>
                                </address>
                            </div>

                        </div>
                    </div>

                </footer>
            </div>

        );
    }
}