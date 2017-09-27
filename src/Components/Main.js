import React, {Component} from 'react';
import MyNav from './MyNav';
import Footer from './Footer'
import Header from './header'



export default class Main extends Component {

    render() {

        return (

            <div>
              <Header/>
              <MyNav/>
              <br/>

                {this.props.children}

                <Footer/>
            </div>


        );

    }
}
