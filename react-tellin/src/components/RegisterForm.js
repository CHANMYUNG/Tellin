import React, { Component } from 'react';
import '../css/RegisterPage.css';

class RegisterForm extends Component{
    render(){
        return(
            <div id="register-form">
                <RegisterLogo ImgUrl = {require('../images/RESOURCE/Register/logo_tellin.png')}/>
                <RegisterInputs/>
                <RegisterBtn btnText = "회원가입"/>
                <RegisterAnnounce/>
            </div>
        );
    }
}

const RegisterLogo = (props) => {
    return(
        <div>
            <img src = {props.ImgUrl} alt = "registerImg" id = "registerLogo"/>
        </div>
    );
}

class RegisterInputs extends Component{
    constructor(props){
        super(props);
        this.state = {
            TypeForms : [
                {
                    "LabelName" : "이메일",
                    "InputType" : "email",
                    "InputPlaceholder" : "아이디를 입력해주세요.",
                    "InputClass" : "typeForms",
                    "InputId" : "emailForm"
                },
                {
                    "LabelName" : "비밀번호",
                    "InputType" : "password",
                    "InputPlaceholder" : "비밀번호를 입력해주세요.",
                    "InputClass" : "typeForms",
                    "InputId" : "pwdForm"
                },
                {
                    "LabelName" : "비밀번호 재확인",
                    "InputType" : "password",
                    "InputPlaceholder" : "비밀번호를 재입력해주세요.",
                    "InputClass" : "typeForms",
                    "InputId" : "checkPwdForm"
                },
                {
                    "LabelName" : "닉네임",
                    "InputType" : "text",
                    "InputPlaceholder" : "닉네임을 입력해주세요.",
                    "InputClass" : "typeForms",
                    "InputId" : "nicknameForm"
                }
            ],

            registerVals : [

            ]
        };
    }

    changeRegister(number, event){
        let val = this.state.registerVals;
        val[number] = event.target.value;
        this.setState({
            registerVals : val
        });
    }

    render(){
        return(
            <div>
                {this.state.TypeForms.map((val, index) => {
                    return(
                        <div key = {index}>
                            <label> {val.LabelName} </label>

                            <input type = {val.InputType}
                                   placeholder = {val.InputPlaceholder}
                                   className = {val.InputClass}
                                   id = {val.InputId}
                                   value = {this.state.registerVals[index]}
                                   onChange = {this.changeRegister.bind(this, index)}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const RegisterBtn = (props) => {
    return(
        <div id = "signupBtn">
            <div id = "signupText">
                {props.btnText}
            </div>
        </div>
    );
}

const RegisterAnnounce = () => {
    return(
        <div id = "announce">
           가입 계약을 체결하면
           <span style = {{color : "#F4586D"}}> 서비스 약관 </span>
           및
           <span style = {{color : "#F4586D"}}> 개인 정보 보호 정책 </span>
           에 동의합니다.
        </div>
    );  
}

export default RegisterForm;