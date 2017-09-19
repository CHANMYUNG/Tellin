import React, {Component} from 'react';

class MainSideBarLayout extends Component{
    render(){
        return(
            <div className = "sideLayout">
                <LogoPart logoUrl = {require('../images/RESOURCE/Dashboard_Main/ic_logo.png')}/>
                <MainNavigation/>
            </div>
        );
    }
}

const LogoPart = (props) => {
    return(
        <div id = "logoPart">
            <img src = {props.logoUrl} alt = "mainLogo" id = "mainLogo"/>
        </div>
    );
}

class MainNavigation extends Component{
    render(){
        return(
            <div id = "navPart">
                
            </div>
        );
    }
}

export default MainSideBarLayout;