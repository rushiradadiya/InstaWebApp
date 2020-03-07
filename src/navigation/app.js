import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import Home from "../components/Home/home";
import Login from "../components/Login/login";
import store from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';

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
