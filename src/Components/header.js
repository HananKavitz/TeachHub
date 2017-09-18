
import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import MyNav from './MyNav';


export default class Header extends Component {

  render() {

      return (

        <div className='container' style={{"color":"lightblue" , "background-image":"url(./static/images/header_sky.jpg)"}}>
              <div className="row row-content col-xs-12" >
                <p>  My header </p>
                <MyNav/>

              </div>
          </div>
        )
      }

}
