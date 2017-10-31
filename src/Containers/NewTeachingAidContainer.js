import React, { Component } from 'react';
import NewTeachingAid from '../Components/NewTeachingAid';
import axios from 'axios';

export default class NewTeachingAidContainer extends Component {
    constructor(props){
        super(props);
        
        this.state = {tags : [],
                    languages : [],
                    forGrades : []
                    };
        

        //mothods bindings
        this.createNewteachingAid = this.createNewteachingAid.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        
    }
    componentDidMount() {
        axios.get('/TeachingAids/languages')
        .then(function(res){
            this.setState({languages : res.data.languages});
        }.bind(this))
        .catch(function(err){
            console.error(err);
        })

        axios.get('/TeachingAids/grades')
        .then(function(res){
            this.setState({forGrades : res.data.grades});
        }.bind(this))
        .catch(function(err){
            console.error(err);
        })
    }
    createNewteachingAid(form){
        const axiosObj = axios.create({
			timeout : 1000,
			headers : {'x-access-token': window.sessionStorage.getItem("authToken")}
        });
        
        axiosObj.post('/TeachingAids/New')
        .then(function(res){
            console.log(res);
            
        }.bind(this))
        .catch(function(err){
            console.error(err);
        });
    }
    
    onErrorSubmit(err){
        console.error(err);
    }

   render(){

    return (
        <NewTeachingAid onErrorSubmit = {this.onErrorSubmit}
        onSubmit = {this.createNewteachingAid}  languages = {this.state.languages} forGrades = {this.state.forGrades}/>
    )
   }
}