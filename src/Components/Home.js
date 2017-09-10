import React, { Component } from 'react';
import UnderConstruction from './UnderConstruction';


export default class Home extends Component {

  render(){

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
