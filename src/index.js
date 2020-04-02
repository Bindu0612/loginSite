import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginPage from './components/loginPage';
import Home from './components/home';
import SignUpPage from './components/signUpPage';
import './App.css';
import store from './store';

class Routing extends Component {

    render() {
        return (
            <Router>
                <Route exact path = "/" component = { LoginPage } />
                <Route exact path = "/loginPage" component = { LoginPage } />
                <Route exact path = "/home" component = { Home } />
                <Route exact path = "/signUpPage" component = { SignUpPage } />
            </Router>
        )
    }

}
ReactDOM.render(<Provider store={store}> <Routing /> </Provider>, document.getElementById('root'));