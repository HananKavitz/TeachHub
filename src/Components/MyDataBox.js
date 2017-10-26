import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';

export default class MyDataBox extends Component {


  render() {

    return (
      <div>
        <Panel header={this.props.mytitle} bsStyle="primary">
          <p>
            {this.props.mycontent}

          </p>
          <Link to={this.props.href}>
            Read More...</Link>
        </Panel >
      </div>

    )
  }

}
