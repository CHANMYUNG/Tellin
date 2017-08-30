import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import "../css/RegisterPage.css"

class Register extends Component{
    render(){
        return(
            <div id="register">
                <RegisterForm InputsInfo =
                {
                    [
                        {
                            InputInfo: "이메일",
                            InputId: "email",
                            InputType: "email",
                            InputPlaceholder: "abc1234@tellin.com"
                        },
                        {
                            InputInfo: "비밀번호",
                            InputId: "password",
                            InputType: "password",
                            InputPlaceholder: "defg5678"
                        },
                        {
                            InputInfo: "비밀번호 재확인",
                            InputId: "password-check",
                            InputType: "password",
                            InputPlaceholder: "defg5678"
                        },
                        {
                            InputInfo: "닉네임",
                            InputId: "nickname",
                            InputType: "text",
                            InputPlaceholder: "abc1234"
                        }
                    ]
                }/>
            </div>
        );
    }
}

export default Register;