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

/*
<DropdownBox ImgUrl = {require('../images/RESOURCE/Main/drop_down_arrow.png')}/>
const DropdownBox = (props) => {
    return(
        <div id = "dropCover">
            <img src = {props.ImgUrl} alt = "dropDown" id = "dropDown"/>
        </div>
    );
}
*/

/*
const CoverLists = (props) => {
    <CoverLists lists = {
                [
                    {"listName" : "ABOUT"},
                    {"listName" : "REGISTER"},
                    {"listName" : "LOGIN"}
                ]
            }/>
    return(
        <div id = "dropCoverList">
            {props.lists.map((info, i) => {
                return(
                    <div className = "coverLists" key = {i}>
                        {info.listName}
                    </div>
                );
            })}
        </div>
    );
}
*/
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