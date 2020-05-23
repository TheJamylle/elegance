import React from 'react';
import { Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import NewClothe from './pages/NewClothe';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Logon} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
}