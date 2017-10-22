import React, { Component } from 'react';
import {Image, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ImageChooser = (props) => {
    return (
        <div>
        <Image id ="myPrettyFace" src= {props.imagePath} responsive/>
        <FormGroup id="formControlsFile">
            <br/>
            <FormControl type="file" accept=".jpg, .jpeg, .png"
                        id="image_uploads"
                        onChange = {props.fileChooserCallback}/>
        </FormGroup>

    </div>)
    
}

export default ImageChooser;


ImageChooser.propTypes = {
    fileChooserCallback: PropTypes.func.isRequired,
    imagePath: PropTypes.string.isRequired
};