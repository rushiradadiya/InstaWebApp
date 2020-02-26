import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../components/home";
import Login from "../components/login";



function App() {
    return (
        <BrowserRouter>
            <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                    <Redirect to='login' from='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
