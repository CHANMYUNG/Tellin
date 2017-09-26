import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';
import Register from './containers/Register';
import Login from './containers/Login';
import PostingSetupModal from './components/PostingSetupModal';
import MainLayout from './components/MainLayout';
import test from './containers/test';
import './css/Index.css';


const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <div>
            <switch>
                <Route exact path='/' component={Landing}/> 
                <Route path = "/register" component = {Register}/>
                <Route path = "/login" component = {Login}/>
                <MainLayout>
                    <Route path = "/test" component = {test}/>
                </MainLayout>
                <Route path="/post" component={PostingSetupModal}/>
            </switch>
        </div>
    </BrowserRouter>
), root);

/*
    Main Layout부분 라우팅 후에 수정해야됨.
 */
