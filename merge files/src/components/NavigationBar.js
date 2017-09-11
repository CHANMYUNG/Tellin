import React, { Component } from 'react';
import '../css/Landing.css';

class NavigationBar extends Component{
    render(){
        return(
            <nav>
                <PageLogo ImgUrl = {require("../images/RESOURCE/Main/logo_tellin.png")}/>
                <NavLists menus ={["ABOUT", "REGISTER", "LOGIN"]}/>
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
            {props.menus.map((menu, i) => {
                return <li key = {i}> {menu} </li>
            })}
        </ul>
    );
}

export default NavigationBar;