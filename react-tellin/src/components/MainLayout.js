import React, {Component} from 'react';
import '../css/MainLayout.css';
import MainHeaderLayout from './MainHeaderLayout';
import MainSideLayout from './MainSideLayout';

class MainLayout extends Component{
    render(){
        return(
            <div id = "mainWrapper">
                <MainSideLayout/>
                <div className = "sectionLayout">
                    <MainHeaderLayout/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;