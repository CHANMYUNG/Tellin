import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import "../css/RegisterPage.css"

class Register extends Component{
    render(){
        return(
            <div id="register">
                <div id = "overlay">
                    <RegisterForm InputsInfo =
                    {
                        [
                            {
                                InputInfo: "이메일",
                                InputId: "email",
                                InputType: "email",
                                InputPlaceholder: "이메일을 입력해주세요."
                            },
                            {
                                InputInfo: "비밀번호",
                                InputId: "password",
                                InputType: "password",
                                InputPlaceholder: "비밀번호를 입력해주세요."
                            },
                            {
                                InputInfo: "비밀번호 재확인",
                                InputId: "password-check",
                                InputType: "password",
                                InputPlaceholder: "비밀번호를 다시 입력해주세요."
                            },
                            {
                                InputInfo: "닉네임",
                                InputId: "nickname",
                                InputType: "text",
                                InputPlaceholder: "닉네임을 입력해주세요."
                            }
                        ]
                    }/>
                </div>
            </div>
        );
    }
}

export default Register;