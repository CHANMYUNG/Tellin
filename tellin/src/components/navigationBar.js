import React from 'react';
import styles from '../css/Landing.css';

class navigationBar extends React.Component{
    render(){
        return(
            <nav id="navigation-bar">
                <logoImg ImgUrl = {require("../images/logo_tellin.png")}/>
                <menuLists menus = {["ABOUT", "REGISTER", "LOGIN"]}/>
            </nav>
        );
    }
}

const logoImg = (props) => {
    return(
        <img src={props.ImgUrl} alt ="Logo Image"/>
    );
}

const menuLists = (props) => {
    return(
        <ul>
            {props.menus.map((menu, i) => {
                return <li key = {i}> {menu} </li>
            })}
        </ul>
    );
}

export default navigationBar;