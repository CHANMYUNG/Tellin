import React, { Component } from 'react';
import '../css/Landing.css';

class NavigationBar extends Component{
    render(){
        return(
            <nav>
                <PageLogo ImgUrl = {require("../images/RESOURCE/Main/logo_tellin.png")}/>
                <NavLists 
                    menus ={
                        [
                            {
                                "menuName" : "ABOUT",
                                "Route" : "/"
                            },
                            {
                                "menuName" : "REGISTER",
                                "Route" : "/register"
                            },
                            {
                                "menuName" : "LOGIN",
                                "Route" : "/login"
                            }
                        ]
                    }/>
            </nav>
        );
    }
}

const PageLogo = (props) => {
    return(
        <img src = {props.ImgUrl} id="pageLogo" alt = "mainLogo"/>
    );
}

const NavLists = (props) => {
    return(
        <ul>
            {props.menus.map((info, idx) => {
                return(
                    <li key = {idx}>
                        {info.menuName}
                    </li>
                );
            })}
        </ul>
    );
}

export default NavigationBar;