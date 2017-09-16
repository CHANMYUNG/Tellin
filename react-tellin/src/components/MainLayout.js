import React, {Component} from 'react';
import '../css/MainLayoutIndex.css';
import '../css/MainLayoutAside.css';
import '../css/MainLayoutHeader.css';
import MainHeaderLayout from '../components/MainHeaderLayout';
import MainSideBarLayout from '../components/MainSideBarLayout';

class MainLayout extends Component{
    render(){
        return(
            <div id = "mainWrapper">
                <MainHeaderLayout/>
                <div id = "layoutSection">
                    <MainSideBarLayout/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;