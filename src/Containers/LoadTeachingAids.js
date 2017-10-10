import React, { Component } from 'react';
import {Form, FormGroup, FormControl,ControlLabel} from 'react-bootstrap';

class LoadTeachingAids extends Component {

  render(){

    return (
        <div className="container">

          <Form horizontal>
            {/*teaching Aid  Title */}
            <FormGroup controlId="Title" sm={5}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter Title"
              />
            </FormGroup>


            {/*subject*/}
            <FormGroup controlId="subject" sm={5}>
              <ControlLabel>subject</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select </option>
                <option value="history">History</option>
                <option value="math">Math</option>
                <option value="English">English</option>
                <option value="other">other...</option>
              </FormControl>
            </FormGroup>


              {/* grade */}
            <FormGroup controlId="grade" sm={5}>
              <ControlLabel>for Grade</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select </option>
                <option value="gradeScholl">grade School</option>
                <option value="highSchool">high School</option>
                <option value="underGrad">under Grad</option>
                <option value="other">other...</option>
              </FormControl>
            </FormGroup>


            {/* description */}
            <FormGroup controlId="description" >
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder="your description here..."  style={{"height":"200px"}}/>
            </FormGroup>





          </Form>
        </div>
      )
  }
}
export default LoadTeachingAids;
