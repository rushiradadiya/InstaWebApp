import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import Home from "../components/home";
import Login from "../components/login";
import store from '../store';

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                    <Redirect to='login' from='/' />
            </Switch>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
