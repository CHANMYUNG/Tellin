import React, { Component } from 'react';
import '../css/Landing.css';

class TitlesCover extends Component{
    render(){
        return(
            <div id="titlesCover">
                <TitleTexts  mainText = "숨겨왔던 내면을 드러내다"
                             subText1 = "고민거리나 비밀을 서로 공유하고"
                             subText2 = "여러분들만의 소통의 공간을 만들어보세요."/>
                <MainBtn/>
            </div>
        );
    }
}

const TitleTexts = (props) => {
    return(
        <div>
            <h1> {props.mainText} </h1>
            <h2> 
                 {props.subText1}
                 <br/>
                 {props.subText2}
            </h2>
        </div>
    );
}

const MainBtn = () => {
    return(
        <div id = "mainBtn">
            <MainBtnText btnText = "LET'S START"/>
        </div>
    );
}

const MainBtnText = (props) => {
    return(
        <div id = "mainBtnText">
            {props.btnText}
        </div>
    );
}
export default TitlesCover;