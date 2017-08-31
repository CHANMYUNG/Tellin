import React, { Component } from 'react';
import MainSearchBar from './MainSearchBar';
import "../css/MainPage.css"

class MainContent extends Component{
    render(){
        return(
            <div id="content">
                <MainSearchBar/>
            </div>
        );
    }
}

export default MainContent;