import React, { Component } from 'react';
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

        <div className="row">
            <div className="col-md-4 offset-sm-8">
                {newTeachingAidButton}
                <br/><br/>
            </div>
        </div>

    )
}

}