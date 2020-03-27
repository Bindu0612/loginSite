import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
// import { Route, BrowserRouter as Router } from 'react-router-dom'; 
// import Home from './home';

class LoginPage extends Component {
    constructor(){
      super();
        this.state ={
          email : "",
          password: ""
        }
    }
    
    
    navigateToHome = (path)=>{
      this.props.history.push(path);
    }
    
    navigateToSignupPage =(path) =>{
        this.props.history.push(path);
    }
    
      render() {
        return (
          <Form className="form-style">
            <h1>
              <span className= "font-weight-bold " > My Login</span>.com
            </h1>
            <h2 className="text-center"> Welcome</h2>
            <FormGroup><div>
              <Label>Email</Label>
              </div>
              <Input id="email" className="button-style" type ="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
              <div>
              <Label>Password</Label>
              </div>
              <Input id="password" className="button-style" type= "password" placeholder="Enter your Password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block" onClick={()=> this.navigateToHome("home")}>Login</Button>
            <div className="text-center">
              <a onClick={()=>this.navigateToSignupPage("signUpPage")}>Sign-up</a>
              <span className="p-2"> | </span>
              <a href="/Forgot Password">Forgot Password</a>
            </div>
          </Form>
        )
      }
    }
    

    export default withRouter(LoginPage);