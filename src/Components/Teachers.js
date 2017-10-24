import React, { Component } from 'react';
import UnderConstruction from './UnderConstruction';


export default class Teachers extends Component {

    render(){

        return (

            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>
                            Our teachers
                        </h2>
                        <UnderConstruction />
                    </div>
                </div>
            </div>
        )
    }
}
