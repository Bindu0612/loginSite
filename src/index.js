import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Home from './components/home';
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import reducer from './reducer';

class Routing extends Component{

    render(){
        return(
            <Router>
                <Route exact path ="/" component={LoginPage}/>
                <Route exact path ="/home" component ={Home}/>
                <Route exact path = "/loginPage" component={LoginPage}/>
                <Route exact path = "/signUpPage" component ={SignUpPage}/>
    </Router>
        )
    }
    
}
ReactDOM.render( <Provider store={store}> <Routing/> </Provider>,   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
