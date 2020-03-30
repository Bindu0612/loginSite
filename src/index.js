import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home';
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class Routing extends Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/loginPage" component={LoginPage} />
                <Route exact path="/signUpPage" component={SignUpPage} />
            </Router>
        )
    }

}
ReactDOM.render(<Provider store={store}> <Routing /> </Provider>, document.getElementById('root'));