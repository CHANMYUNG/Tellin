import React, { Component } from 'react';

class LoginForm extends Component{
    render(){
        return(
            <div id="loginForm">
                <LoginImg ImgUrl = {require("../images/RESOURCE/SignIn/logo_tellin.png")}/>
                <TypeForms/>
                <ClickBtns Boxes = 
                {
                    [
                        {
                            ClassName : "clickBtns",
                            IdName : "loginBtn",
                            BtnText : "로그인"
                        },
                        {
                            ClassName : "clickBtns",
                            IdName : "fbLoginBtn",
                            BtnText : "페이스북 로그인"
                        }
                    ]
                }/>
            </div>
        );
    }
}

const LoginImg = (props) => {
    return(
        <img src = {props.ImgUrl} id = "loginLogo" alt = "loginLogo"/>
    );
}

class TypeForms extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginArr : [
                {
                    LabelName : "이메일",
                    ShowInput : "이메일을 입력해주세요.",
                    Type : "email",
                    IdName : "emailForm",
                    ClassName : "typeForms"
                },
                {
                    LabelName : "비밀번호",
                    ShowInput : "비밀번호를 입력해주세요.",
                    Type : "password",
                    IdName : "pwdForm",
                    ClassName : "typeForms"
                }
            ],
            labelVals : [

            ]
        };
    }

    changeValues(number, event) {
        let val = this.state.labelVals;
        val[number] = event.target.value;
        this.setState({
            labelVals : val
        });
        console.log(this.state.labelVals);
    }

    render(){
        return(
            <div>
                {this.state.loginArr.map((info, i) => {
                    return(
                        <div key = {i}>
                            <label>
                                {info.LabelName}
                            </label>
                            <input type = {info.Type}
                                   placeholder = {info.ShowInput}
                                   className = {info.ClassName}
                                   id = {info.IdName}
                                   value={this.state.labelVals[i]}
                                   onChange={this.changeValues.bind(this, i)}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

class ClickBtns extends Component{
    render(){
        return(
            <div>
               {this.props.Boxes.map((info, i) => {
                   return(
                        <div className = {info.ClassName}
                             id = {info.IdName}>
                             {info.BtnText}
                        </div>
                   );
               })}
               <FindPw findText1 = "비밀번호를 잊어버리셨나요?"
                       findText2 = "비밀번호 찾기"/>
            </div>
        );  
    }
}

const FindPw = (props) => {
    return(
        <div id = "findPwd">
            {props.findText1}
            <span style = {{color : "#F4586D",
                            paddingLeft : 0.5 + "rem",
                            cursor : "pointer"}}>
                {props.findText2}
            </span>
        </div>
    );
}
export default LoginForm;