import React, {Component} from 'react';
import MyCarousel from './MyCarousel';
import MyNav from './MyNav';
import Footer from './Footer'
import ScrollToTop from 'react-scroll-up'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {isLogedIn:false};

        this.loginCallback = this.loginCallback.bind(this);
        this.props.route.childRoutes[1].isLogedCallback = this.loginCallback;
    }

    loginCallback(value){
        this.setState({isLogedIn:value})
    }

    render() {

        return (

            <div>

                <MyNav isLogedIn = {this.state.isLogedIn}/>
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
