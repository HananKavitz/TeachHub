import React, { Component } from 'react';
import MyDataBox from './MyDataBox'

export default class Home extends Component {

  render(){

    return (


        <div className="container">

            <div className="row row-content">
                <div className="col-xs-6">

                    <MyDataBox/>

                </div>
                <div className="col-xs-6">

                      <MyDataBox/>

                </div>
            </div>
            <div className="row row-content">
                <div className="col-xs-6">

                      <MyDataBox/>

                </div>
                <div className="col-xs-6">

                      <MyDataBox/>

                </div>
            </div>
        </div>)
  }
}
