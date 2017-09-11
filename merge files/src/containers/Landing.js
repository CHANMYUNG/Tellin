import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import TitlesCover from '../components/TitlesCover';
import "../css/Landing.css";

class Landing extends Component{
    render(){
        return(
            <div id="landing">
                <NavigationBar/>
                <TitlesCover/>
            </div>
        );
    }
}

export default Landing;