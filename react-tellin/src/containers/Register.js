import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import "../css/RegisterPage.css"

class Register extends Component{
    render(){
        return(
            <div id="register">
                <div id = "overlay">
                    <RegisterForm/>
                </div>
            </div>
        );
    }
}

export default Register;