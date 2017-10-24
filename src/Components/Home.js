import React, { Component } from 'react';
import MyDataBox from './MyDataBox';
import UnderConstruction from './UnderConstruction';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Home extends Component {

  render(){
    // need to be loged in to create new teaching aids
      const newTeachingAidButton = this.props.isLogedIn ?
      <Link to = {'NewTeachingAid'}>
          <Button bsStyle="primary">New teaching aid</Button>
      </Link>:null;

var myData = {
  mytitle :"my title",
  mycontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium mattis eros, ac ultrices mauris dapibus dictum. Vestibulum erat felis, porta nec efficitur sit amet, vulputate a lacus. Integer a ante viverra, volutpat turpis a, vulputate nunc. Nullam eleifend in purus nec finibus. Proin a mauris dictum, consequat mi vitae, fermentum ante. Cras risus ipsum, pulvinar at ligula sit amet, vulputate rhoncus risus. Nunc libero risus, consequat non sodales ut, pharetra a elit.",
  href: 'home'
  };

    return (

        <div className="container">
          <div className="row">
              <div className="col-md-4 offset-sm-8">
                  {newTeachingAidButton}
              </div>
          </div>

            <div className="row row-content">
                <div className="col-sm-6 col-xs-12">

                    <MyDataBox mytitle = {myData.mytitle} mycontent = {myData.mycontent} href={myData.href}/>

                </div>
                <div className="col-sm-6 col-xs-12">

                      <MyDataBox mytitle = {myData.mytitle} mycontent = {myData.mycontent} href={myData.href}/>

                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6 col-xs-12">

                      <MyDataBox mytitle = {myData.mytitle} mycontent = {myData.mycontent} href={myData.href}/>

                </div>
                <div className="col-sm-6 col-xs-12">

                  <MyDataBox mytitle = {myData.mytitle} mycontent = {myData.mycontent} href={myData.href}/>

                </div>
            </div>
        </div>)
  }
}
