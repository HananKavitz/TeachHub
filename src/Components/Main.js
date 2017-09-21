import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyNav from './MyNav';
import Footer from './Footer'
import ScrollToTop from 'react-scroll-up'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogedIn : false,
            userName : ''
        };

        this.updateLoginCallback = this.updateLoginCallback.bind(this);
        this.props.route.childRoutes[1].updateLoginCallback = this.updateLoginCallback;
        this.props.route.childRoutes[2].updateLoginCallback = this.updateLoginCallback;
    }

    updateLoginCallback(value,userName){
        this.setState({
            isLogedIn : value,
            userName : userName})
    }

    render() {

        return (

            <div>

                <MyNav isLogedIn = {this.state.isLogedIn} userName = {this.state.userName}/>
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
