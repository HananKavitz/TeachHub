import React, { Component } from 'react';
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

    return (

        <div className="container">

            <div className="row row-content">
                <div className="col-xs-12">

                    <h1>
                        welcome to teachub
                    </h1>
                </div>
            </div>
            <br/>



            <div className="row">
                <div className="col-md-4 offset-sm-8">
                    {newTeachingAidButton}
                </div>
            </div>

            <br/>
            <div className="row row-content">
                <div className="bluebox col-sm-6 col-xs-12">
                    <h3>Best of all times</h3>
                    <UnderConstruction />
                </div>

                <div className="bluebox col-sm-6 col-xs-12">
                    <h3>New teaching aids</h3>
                    <UnderConstruction />
                </div>

                <br/>
                <div className="bluebox col-sm-6 col-xs-12">
                    <h3>Best teachers</h3>
                    <UnderConstruction />
                </div>

                <div className="bluebox col-sm-6 col-xs-12">
                    <h3>Peek of the week</h3>
                    <UnderConstruction />
                </div>
            </div>
        </div>)
  }
}
