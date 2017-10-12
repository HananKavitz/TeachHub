import React, { Component } from 'react';
import {Image, FormGroup, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Form from "react-jsonschema-form";

export default class EditProfile extends Component {

   
    createSchema(){
        const userSchema = {
            title: "Your profile",
            type: "object",
            required: ["myCountry"],
            properties: {
                myImage : {type : "string",title : "Your pretty face"},
                mySex : {type: "string", title: "Gender" , "enum":["Man","Woman"],"default" : "Man"},
                interests : {type: "array" , title: "Your interests" , items : {type : "string"}},
                ImTeaching : {type: "array" , title: "I am teaching" , items : {type : "string"}},
                aboutMe : {type: "string" , title: "About me"},
                mySchools : {type: "array" , title: "Schools I'm teaching in" , items : {type : "string"}},
                myCountry : {type: "string" , title: "My country"},
                gradesITeach : {type: "array" ,title: "Grades I teach" , items : {type : "string"}}
            }
        }

        return userSchema
    }
    
    createUISchema (){
        const userUiSchema = {
            myImage : {
                "ui:widget": (props) => {
                    const imagePath = props.value ? props.value : "./static/images/avatar_placeholder-9a2f53db6270aa02b5ae2c5af1ffc72b.svg";
                    return ( 
                    <div>
                        <Image id ="myPrettyFace" src= {imagePath} responsive/>
                        <FormGroup id="formControlsFile">
                            <br/>
                            <FormControl type="file" accept=".jpg, .jpeg, .png"
                                        id="image_uploads"
                                        onChange = {props.fileChooserCallback}/>
                        </FormGroup>
    
                    </div>)
                }
            },
            mySex:{
                "ui:widget": "select"
            },
            interests:{
                "ui:options" : {
                    addable : true,
                    removable : true
                }
            },
            ImTeaching:{
                "ui:widget": "textarea"
            },
            aboutMe:{
                "ui:widget": "textarea"
            },
            mySchools:{
                "ui:widget": "textarea"
            },
            myCountry:{
                "ui:widget": "text"
            },
            gradesITeach:{
                "ui:widget": "textarea"
            }
    
        }

        return userUiSchema
    }

    render(){
        return (
            <div className = "container">

                <div className = "row row-content">
                    <div className = "col-sm-6 col-xs-12">
                        <Form schema = {this.createSchema()}
                            uiSchema = {this.createUISchema()}
                            onSubmit = {this.props.sendFormToServer}
                            onError = {this.props.onErrorSubmit} 
                            formData = {this.props.formData}>

                        </Form>
                    </div>
                </div>
            </div>
        )
        
    }
}

EditProfile.propTypes = {
    fileChooserCallback: PropTypes.func.isRequired,
    profileData : PropTypes.object,
    sendFormToServer :  PropTypes.func.isRequired
};
