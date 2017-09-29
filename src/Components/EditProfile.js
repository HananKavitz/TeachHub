import React, { Component } from 'react';
import {Image, FormGroup, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Form from "react-jsonschema-form";

export default class EditProfile extends Component {

   
    createSchema(){
        const userSchema = {
            title: "Your profile",
            type: "object",
            required: ["country"],
            properties: {
                myImage : {type : "string",title : "Your pretty face"},
                mySex : {type: "string", title: "Gender" , "enum":["Man","Woman"],"default" : "Man"},
                interests : {type: "string" , title: "Your interests"},
                ImTeaching : {type: "string" , title: "I am teaching"},
                aboutMe : {type: "string" , title: "About me"},
                mySchools : {type: "string" , title: "Schools I'm teaching in"},
                country : {type: "string" , title: "My country"},
                gradesITeach : {type: "string" ,title: "Grades I teach" , default : "First grade"}
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
                "ui:widget": "textarea"
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
            country:{
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
        // //Image and image chooser
        // let myImage = (
        //     <div className="col-xs-9 col-sm-5">
        //         <Image id ="myPrettyFace" src="./static/images/avatar_placeholder-9a2f53db6270aa02b5ae2c5af1ffc72b.svg" responsive/>
        //         <FormGroup id="formControlsFile">
        //             <ControlLabel>{"Your pretty face"}</ControlLabel>
        //             <FormControl type="file" accept=".jpg, .jpeg, .png"
        //                          id="image_uploads"
        //                          onChange = {this.fileChooserCallback}/>
        //         </FormGroup>

        //     </div>);
        //     //submit button
        //     let submitButton = (
        //         <FormGroup>
        //             <Col componentClass={ControlLabel} sm={1}>
        //                 <Button bsStyle = 'primary' className="success" type="submit" onClick={this.signinPB}>
        //                     Update
        //                 </Button>
        //             </Col>
        //             <Col componentClass={ControlLabel} sm={2}>
        //                 <Button className="success" onClick={this.cancel}>
        //                     Cancel
        //                 </Button>
        //             </Col>
        //         </FormGroup>);


        //     //Email
        //     let email = (
        //         <FormGroup controlId="formHorizontalEmail">
        //             <Col componentClass={ControlLabel} sm={5}>
        //                 <InputGroup>
        //                     <InputGroup.Addon>
        //                         <i className="fa fa-envelope" aria-hidden="true">

        //                         </i>

        //                     </InputGroup.Addon>

        //                     <FormControl type="text" placeholder="E-mail" id="myEmail"/>
        //                 </InputGroup>
        //             </Col>
        //         </FormGroup>);

        //     // my name
        //     let myName = (
        //         <FormGroup controlId="formHorizontalMyName">
        //             <Col componentClass={ControlLabel} sm={5}>
        //                 <InputGroup>
        //                     <InputGroup.Addon>
        //                         <i className="fa fa-user" aria-hidden="true">
        //                         </i>
        //                     </InputGroup.Addon>

        //                     <FormControl type="text" placeholder="My name"/>
        //                 </InputGroup>
        //             </Col>
        //         </FormGroup>
        //     );

        //     // my sex
        //     let mySexPlease = (
        //         <div className="col-xs-6 col-sm-3">
        //             <FormGroup controlId="formControlsMySex">
        //                 <ControlLabel>Gender</ControlLabel>
        //                 <FormControl componentClass="select">
        //                     <option value="select">Man</option>
        //                     <option value="select">Woman</option>


        //                 </FormControl>
        //             </FormGroup>
        //         </div>
        //     );

        //     // Password
        //     let myPassword = (
        //         <FormGroup controlId="formHorizontalPassword">
        //             <Col componentClass={ControlLabel} sm={5}>
        //                 <InputGroup>
        //                     <InputGroup.Addon>
        //                         <i className="fa fa-key" aria-hidden="true">

        //                         </i>
        //                     </InputGroup.Addon>

        //                     <FormControl type="text" placeholder="Password"/>
        //                 </InputGroup>
        //             </Col>
        //         </FormGroup>

        //     );

        //     // my interests
        //     let allInterests = (this.props.profileData.interests ?
        //         this.props.profileData.interests.map((interest,key) =>
        //             <option value="select" key = {key}> {interest} </option>
        //         ): null
        //     );

        //     let myInterests = (
        //         <FormGroup controlId="formControlsSelectMyInterests">
        //             <ControlLabel>My interests</ControlLabel>
        //             <FormControl componentClass="select" multiple>
        //                 {allInterests}
        //             </FormControl>
        //         </FormGroup>
        //     );

        //     // About me
        //     let aboutMe = (
        //         <FormGroup controlId="formControlsAboutMe">
        //             <ControlLabel>About me</ControlLabel>
        //             <FormControl componentClass="textarea" placeholder="I am..."/>
        //         </FormGroup>
        //     );
        //     // currently I'm teaching
        //     let ImTeachingList = (this.props.profileData.ImTeaching ?
        //             this.props.profileData.ImTeaching.map((subject,key) =>
        //                 <option value="select" key = {key}> {subject} </option>
        //             ): null
        //     );

        //     let ImTeaching = (
        //         <FormGroup controlId="formControlsSelectImTeaching">
        //             <ControlLabel>Currently I am teaching</ControlLabel>
        //             <FormControl componentClass="select" multiple>
        //                 {ImTeachingList}
        //             </FormControl>
        //         </FormGroup>
        //     );

        //     let mySchools = (
        //         <FormGroup controlId="formControlsSelectImTeaching">
        //             <ControlLabel>Schools I am teaching in</ControlLabel>
        //             <FormControl componentClass="textarea" placeholder = "My school">
        //             </FormControl>
        //         </FormGroup>
        //     );

            // return (

            //     <div className="container">
            //         <br/>
            //         <br/>

            //         <form onSubmit = {this.props.sendFormToServer}>
            //             <div className="row row-content">
            //                 <div className="col-xs-12">

            //                         {myImage}

            //                         {myName}


            //                         {mySexPlease}
            //                 </div>
            //             </div>
            //             <div className="row row-content">
            //                 <div className="col-xs-12">
            //                         {aboutMe}
            //                         {ImTeaching}
            //                         {myInterests}
            //                         {mySchools}
            //                         {submitButton}

            //                 </div>
            //             </div>
            //         </form>
            //     </div>
            // );
    }
}

EditProfile.propTypes = {
    fileChooserCallback: PropTypes.func.isRequired,
    profileData : PropTypes.object,
    sendFormToServer :  PropTypes.func.isRequired
};
