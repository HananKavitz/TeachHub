import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyNav from './MyNav';
import Footer from './Footer'


export default class Main extends Component {

    render() {

        return (

            <div>
                <MyNav/>
                <br/>
                <MyCarousel/>
                <br/>
                {this.props.children}
                <br/>
                <br/>
                <Footer/>
            </div>


        );

    }
}