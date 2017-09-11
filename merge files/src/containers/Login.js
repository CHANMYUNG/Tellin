import React, { Component } from 'react';
import "../css/Login.css";
import LoginForm from '../components/LoginForm';

class Login extends Component{
    render(){
        return(
            <div id = "login">
                <LoginForm/>  
            </div>
        );
    }
}

export default Login;