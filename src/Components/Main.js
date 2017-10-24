import React, {Component} from 'react';
import MyNav from './MyNav';
import Footer from './Footer'
import Header from './header'
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
    componentDidMount() {
        if (window.sessionStorage.getItem("authToken")){
            this.setState({
                isLogedIn : true,
                userName :  window.sessionStorage.getItem("userName")
            })
        }
    }
    updateLoginCallback(value,userName,authToken){
        this.setState({
            isLogedIn : value,
            userName : userName
        })
    }

    render() {
        const childrenWithNewProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                isLogedIn: this.state.isLogedIn}
            )
        );
        return (

            <div>
                <Header/>
                <MyNav isLogedIn = {this.state.isLogedIn} userName = {this.state.userName}/>
                <br/>
                <ScrollToTop  showUnder={60}>
                    <span className = "floatingbotton">
                        <i className="glyphicon glyphicon-menu-up"/>
                    </span>
                </ScrollToTop>
                <br/>
                {childrenWithNewProps}
                <br/>
                <br/>
                <Footer/>
            </div>


        );

    }
}
