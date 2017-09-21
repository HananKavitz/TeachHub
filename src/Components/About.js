import React, { Component } from 'react';
import UnderConstruction from './UnderConstruction';


export default class About extends Component {

    render(){

        return (

            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>
                            About
                        </h2>
                        <UnderConstruction />
                    </div>
                </div>
            </div>
        )
    }
}
