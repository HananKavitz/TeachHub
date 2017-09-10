import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyNav from './MyNav';
import Footer from './Footer'
import ScrollToTop from 'react-scroll-up'

export default class Main extends Component {

    render() {

        return (

            <div>

                <MyNav/>
                <br/>
                <MyCarousel/>
                <ScrollToTop  showUnder={60}>
                    <span className = "floatingbotton">
                        <i className="glyphicon glyphicon-menu-up"/>
                    </span>
                </ScrollToTop>
                <br/>
                {this.props.children}
                <br/>
                <br/>
                <Footer/>
            </div>


        );

    }
}
