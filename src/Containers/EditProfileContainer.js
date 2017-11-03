import React, { Component } from 'react';
import axios from 'axios';
import EditProfile from '../Components/EditProfile';

export default class EditProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {},
            gradesITeach :{}
        };

        this.fileChooserCallback = this.fileChooserCallback.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.sendFormToServer = this.sendFormToServer.bind(this);
    }
    componentDidMount(){
        const axiosObj = axios.create({
			timeout : 1000,
			headers : {'x-access-token': window.sessionStorage.getItem("authToken")}
		});
        axiosObj.get('/User/ProfileData')
            .then(function (res) {

                this.setState({formData:  res.data.userProfile});
            }.bind(this))
            .catch(function (error) {
                console.error(error);
            });
        axios.get('/TeachingAids/grades')
            .then(function(res){
                this.setState({gradesITeach : res.data.grades})
            }.bind(this))
            .catch(function(error){
                console.error(error);
            })
    }

    
    fileChooserCallback(evt){
        let input = document.getElementById('myPrettyFace');
        // need to save image to database here
        console.log(input);
        input.src="";
    }

    sendFormToServer(data){
        let dataForm = data.formData;
        console.log(dataForm);

        const axiosObj = axios.create({
			timeout : 1000,
			headers : {'x-access-token': window.sessionStorage.getItem("authToken")}
        });

        axiosObj.put('/User/ProfileData',dataForm)
        .then(function(res){
            this.props.router.push('/Home');// go to Home page
        }.bind(this))
        .catch(function (error) {
            console.log(error);
            if (error.status === 500){
                alert('Failed to edit your profile')
            }
        });
    }

    onErrorSubmit(error){
        console.error(error);
    }

    render(){
        return (
            <EditProfile fileChooserCallback = {this.fileChooserCallback} onErrorSubmit = {this.onErrorSubmit}
                formData = {this.state.formData} sendFormToServer = {this.sendFormToServer} gradesITeach = {this.state.gradesITeach}/>
        );
    }
}
