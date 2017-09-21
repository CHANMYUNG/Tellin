import React, {Component} from 'react';

class MainSideBarLayout extends Component{
    componentDidMount(){
        let navImgs = document.getElementsByClassName('navImgs');
        let imgs = document.getElementsByClassName('imgs');

        Array.from(navImgs).forEach((elem, index) => {        
            elem.addEventListener('mouseover', () => {
                let hoverImgs = [
                    require('../images/RESOURCE/Dashboard_Main/ic_home_white.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_love_white.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_group_white.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_person_white.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_doller_white.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_more_white.png')
                ];
                
                
                imgs[index].src = hoverImgs[index];
            });
            elem.addEventListener('mouseout', () => {
                let hoverImgs = [
                    require('../images/RESOURCE/Dashboard_Main/ic_home_gray.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_love_gray.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_group_gray.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_person_gray.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_doller_gray.png'),
                    require('../images/RESOURCE/Dashboard_Main/ic_more_gray.png')
                ];
                
                imgs[index].src = hoverImgs[index];
            });
        });
    }

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
                <UserInfo/>
                <NavImgs navImgs = {
                    [
                        {
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_home_gray.png'),
                            "ImgTitle" : "메인으로",
                            "IdName" : "mainNav",
                            "ImgName" : "mainImg"
                        },
                        {
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_love_gray.png'),
                            "ImgTitle" : "연애소통",
                            "IdName" : "loveNav",
                            "ImgName" : "loveImg"
                        },
                        {   
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_group_gray.png'),
                            "ImgTitle" : "가족소통",
                            "IdName" : "FamilyNav",
                            "ImgName" : "familyImg"
                        },
                        {
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_person_gray.png'),
                            "ImgTitle" : "친구소통",
                            "IdName" : "FriendNav",
                            "ImgName" : "friendImg"
                        },
                        {
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_doller_gray.png'),
                            "ImgTitle" : "금전소통",
                            "IdName" : "MoneyNav",
                            "ImgName" : "moneyImg"
                        },
                        {
                            "ImgUrl" : require('../images/RESOURCE/Dashboard_Main/ic_more_gray.png'),
                            "ImgTitle" : "기타소통",
                            "IdName" : "EtcNav",
                            "ImgName" : "etcImg"
                        }
                    ]
                }/>
                <NavLine/>
                <UserNavs users = {
                    [
                        {"users" : "소통작성"},
                        {"users" : "공지사항"},
                        {"users" : "문의하기"},
                        {"users" : "회원탈퇴"}
                    ]
                }/>
            </div>
        );
    }
}

class UserInfo extends Component{
    render(){
        return(
            <div id = "userInfo">

            </div>
        );
    }
}

const NavLine = () => {
    return(
        <div id = "navLine">
        </div>
    );
}

const NavImgs = (props) => {
    return(
        <div id = "navImgsCover">
            {props.navImgs.map((imgs, key) => {
                return(
                    <div className = "navImgs" key = {key}>
                        <img src = {imgs.ImgUrl} className = "imgs" id = {imgs.ImgName}/>

                        <div className = "imgTitles" id = {imgs.IdName}>
                            {imgs.ImgTitle}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const UserNavs = (props) => {
    return(
        <div id = "etcNavCover">
            {props.users.map((info, i) => {
                return(
                    <div key = {i} className = "etcNavs">
                        <span>
                            {info.users}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default MainSideBarLayout;