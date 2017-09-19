import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import TitlesCover from '../components/TitlesCover';
import "../css/Landing.css";

class Landing extends Component{
    render(){
        return(
            <body id="landing">
                <div id = "overlay">
                    <NavigationBar/>
                    <TitlesCover/>
                </div>
            </body>
        );
    }
}

export default Landing;