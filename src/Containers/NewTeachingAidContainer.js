import React, { Component } from 'react';
import NewTeachingAid from '../Components/NewTeachingAid';
import axios from 'axios';

export default class NewTeachingAidContainer extends Component {
    constructor(props){
        super(props);
        
        this.state = {tags : []};
        

        //mothods bindings
        this.createNewteachingAid = this.createNewteachingAid.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.getFormData = this.getFormData.bind(this);
    }

    createNewteachingAid(form){
        const axiosObj = axios.create({
			timeout : 1000,
			headers : {'x-access-token': window.sessionStorage.getItem("authToken")}
        });
        
        axiosObj.post('/teachingAids/New')
        .then(function(res){
            console.log(res);
            this.setState({
                formData : this.getFormData()
            })
        }.bind(this))
        .catch(function(error){

        });
    }
    getFormData(){

    }
    onErrorSubmit(err){
        console.error(err);
    }

   render(){

    return (
        <NewTeachingAid onErrorSubmit = {this.onErrorSubmit}
        onSubmit = {this.createNewteachingAid} formData = {this.getFormData()} />
    )
   }
}