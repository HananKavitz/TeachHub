import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyNav from './MyNav';
import Footer from './Footer'
import {PageHeader} from 'react-bootstrap'
import Header from './header'


export default class Main extends Component {

    render() {

        return (

            <div>
            <Header/>

                    <br/>
                
                    <br/>
                    {this.props.children}
                    <br/>
                    <br/>
                <Footer/>
            </div>


        );

    }
}
