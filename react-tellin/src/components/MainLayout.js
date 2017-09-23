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
                    <MainHeaderLayout
                    LeftImgs = {
                        [
                            {
                                "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_left_arrow.png'),
                                "ImgId" : "leftArrow",
                                "ImgClass" : "headerLeftImgs"
                            },
                            {
                                "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_menu.png'),
                                "ImgId" : "headerMenu",
                                "ImgClass" : "headerLeftImgs"
                            },
                            {
                                "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_search.png'),
                                "ImgId" : "headerSearch",
                                "ImgClass" : "headerLeftImgs"
                            }
                        ]
                    }

                    RightImgs = {
                        [
                            {
                                "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_log_out_gray.png'),
                                "ImgId" : "headerLogout",
                                "ImgClass" : "headerRightImgs"
                            },         
                            {
                                "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_setting.png'),
                                "ImgId" : "headerSetting",
                                "ImgClass" : "headerRightImgs"
                            }
                                               
                        ]
                    }
                    />

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;