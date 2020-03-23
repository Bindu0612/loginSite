import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import fire from './fire';



class LoginPage extends Component{

    constructor(){
        super();
    }

    login=()=>{
        const email=  document.querySelector("#email").Value;
        const password = document.querySelector("#password").Value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((user)=>{
            console.log("Successfully logged in");
        })
        .catch((err)=>{
            console.log("Error logging in");
        }
        )
    
    }
  
    signUp=()=>{
        const email=  document.querySelector("#email").Value;
        const password = document.querySelector("#password").Value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((user)=>{
            console.log("Successfully signed up");
        })
        .catch((err)=>{
            console.log("Error signing up");
        }
        )
    
    }
    render() {
      return (<div className="formClass">
        <Form className="login-form">
          <h1>
            <span className="font-weight-bold text-center"> Website</span>.com </h1>
          <h3 className="text-center"> Welcome </h3>
  
          <FormGroup>
            <Label id="email">Email</Label>
            <input type="email" placeholder="email" />
          </FormGroup>

          <FormGroup>
            <Label id="password">Password</Label>
            <input type="password" placeholder="password" />
          </FormGroup>

          <Button className="btn-lg btn-dark btn-block" onClick={this.login()}>Login</Button>
        </Form>
        <div className="text-center">
          Or continue with your social account
        </div>
        <div className="facebookButton">
          <FacebookLoginButton />
        </div>
        <div className="text-center">
          <a href="sign-up" onClick={this.signUp}> Sign up</a>
          <span className="signUp">|</span>
          <a href="Forgot Password">Forgot Password</a>
          </div>
      </div>
      );
    }
  
}

export default LoginPage;