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
                    <UnderConstruction />
                </div>
            </div>
        </div>)
  }
}
