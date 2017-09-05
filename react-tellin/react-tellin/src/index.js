import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';
import Register from './containers/Register';
import Login from './containers/Login';

const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Landing}/> 
            <Route path = "/register" component = {Register}/>
            <Route path = "/login" component = {Login}/>
        </div>
    </BrowserRouter>
), root);
