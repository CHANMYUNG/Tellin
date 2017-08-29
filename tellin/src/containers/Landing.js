import React from 'react';
import navigationBar from '../components/navigationBar';
import titlesCover from '../components/titlesCover';

class Landing extends React.Component {
    render() {
        return(
            <div id="landing-page">
                <navigationBar/>
                <titlesCover/>
            </div>
        );
    }
}

export default Landing;