import React, { Component } from 'react';
import "../css/Login.css";
import LoginForm from '../components/LoginForm';

class Login extends Component{
    render(){
        return(
            <div id = "login">
                <div id = "overlay">
                    <LoginForm/>  
                </div>
            </div>
        );
    }
}

export default Login;