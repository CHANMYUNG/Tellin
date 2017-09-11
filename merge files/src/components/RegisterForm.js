import React, { Component } from 'react';
import '../css/RegisterPage.css';

class RegisterForm extends Component{
    render(){
        return(
            <div id="register-card">
                <RegisterLogo ImgUrl = {require("../images/RESOURCE/Register/logo_tellin.png")}/>
                {this.props.InputsInfo.map((info, i) =>
                    {
                        return(
                            <RegisterInput
                            InputInfo = {info.InputInfo}
                            InputId = {info.InputId}
                            InputType = {info.InputType}
                            InputPlaceholder = {info.InputPlaceholder}
                            />  
                        );
                    })
                }
                <div id="register-submit">
                    회원가입
                </div>
                <div id="register-info">
                    가입 계약을 체결하면 <span id="register-tos">서비스 약관</span> 및 <span id="register-pp">개인 정보 보호 정책</span>에 동의합니다.
                </div>
            </div>
        );
    }
}

const RegisterLogo = (props) => {
    return(
        <img src = {props.ImgUrl} id="logo-image" alt="Logo"/>
    );
}

const RegisterInput = (props) =>{
    return(
        <div  className="register-form">
            {props.InputInfo}<br/>
            <input type={props.InputType} id={props.InputId} placeholder={props.InputPlaceholder}/>
        </div>
    );
}

export default RegisterForm;