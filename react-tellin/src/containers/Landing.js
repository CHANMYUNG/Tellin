import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import TitlesCover from '../components/TitlesCover';
import "../css/Landing.css";

class Landing extends Component{
    render(){
        return(
            <body id="landing">
                <NavigationBar/>
                <TitlesCover/>
            </body>
        );
    }
}

export default Landing;