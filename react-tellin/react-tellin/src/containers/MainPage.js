import React, { Component } from 'react';
import MainSideBar from '../components/MainSideBar';
import MainContent from '../components/MainContent';
import "../css/MainPage.css"

class MainPage extends Component{
    render(){
        return(
            <div id="main-page">
                <MainSideBar/>
                <MainContent/>
            </div>
        );
    }
}

export default MainPage;