import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';
import Register from './containers/Register';
import Login from './containers/Login';
import PostingSetupModal from './components/PostingSetupModal';
import MainLayout from './components/MainLayout';
import './css/Index.css';


const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Landing}/> 
            <Route path = "/register" component = {Register}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/main" component = {MainLayout}/>
            <Route path="/post" component={PostingSetupModal}/>
        </div>
    </BrowserRouter>
), root);

/*
    Main Layout부분 라우팅 후에 수정해야됨.
 */
