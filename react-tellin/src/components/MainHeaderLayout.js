import React, {Component} from 'react';

class MainHeaderLayout extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let headerMenu = document.getElementById('headerMenu');
        let sideLayout = document.getElementsByClassName('sideLayout')[0];
        let sectionLayout = document.getElementsByClassName('sectionLayout')[0];

        let clickCnt = 0;

        headerMenu.addEventListener('click', () => {
            if(clickCnt % 2 === 0){
                sideLayout.style.width = 0;
                sectionLayout.style.width = "100%";
            }else{
                sideLayout.style.width = "16.5rem";
                sectionLayout.style.width = "calc(100% - 16.5rem)";
            }

            clickCnt++;
        });
    }

    render(){
        return(
            <div className = "headerLayout">
                {this.props.LeftImgs.map((imgs, idx) => {
                    return(
                        <img key = {idx}
                             id = {imgs.ImgId}
                             src = {imgs.ImgUrl}
                             className = {imgs.ImgClass}
                             alt = "headerImg"/>
                    );
                })}

                {this.props.RightImgs.map((imgs, idx) => {
                    return(
                        <img key = {idx}
                             id = {imgs.ImgId}
                             src = {imgs.ImgUrl}
                             className = {imgs.ImgClass}
                             alt = "headerImg"/>
                    );
                })}
            </div>
        );
    }
}

export default MainHeaderLayout;