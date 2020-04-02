import React, { Component } from 'react';
import { Button, 
    Form, 
    FormGroup, 
    Label, 
    Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
/* import { Route, BrowserRouter as Router } from 'react-router-dom'; 
 import Home from './home'; */

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            
        }
    }

    navigateToHome = (path, userName) => {
        this.props.history.push(path, userName);  
    }

    navigateToSignupPage = (path) => {
        this.props.history.push(path);
    }

   /* validateValues =() =>{
        const storeEmail= this.props.Name;
        console.log(storeEmail);
    }*/

        validateValues = () => {
            const loginEmail = document.querySelector("#email").value;
            const loginPassword = document.querySelector("#password").value;
            console.log(loginEmail, loginPassword, this.props.users);
         
                for (let i = 0; i <= this.props.users.length-1; i+=1) 
                {            
                    if (
                        loginEmail === this.props.users[i].EmailId 
                        && loginPassword === this.props.users[i].Password
                        ) 
                        {
                            const userName = this.props.users[i].Name;
                            console.log(userName);
                                /*debugger;
                                 alert("hi");
                                 break;*/
                            this.navigateToHome("home", userName);
                        }
                        alert("Please re-check the credentials entered");
                    
                }
            };

            render() {
                return (
                    <Form className = "form-style">
                        <h1>
                            <span className = "header-style"> Junoon </span>.com
                        </h1>
                        
                        <h2 className = "text-center"> 
                            Welcome
                        </h2>
                        
                        <FormGroup>
                            <div>
                                <Label Email />
                            </div>
                        
                            <Input id = "email" className = "button-style" type = "email" 
                            placeholder = "Email" />
                        </FormGroup>

                        <FormGroup>
                            <div>
                                <Label Password />
                            </div>

                            <Input id = "password" className = "button-style" 
                            type = "password" placeholder = "Enter your Password" />
                        </FormGroup>

                        <Button className = "btn-lg btn-dark btn-block" 
                            onClick={ () => this.validateValues() }> Login </Button>

                            <div className = "text-center">
                                <a style = {{ textDecoration : 'underline', color : 'black', 
                                cursor : 'pointer' }}
                                onClick = { () => this.navigateToSignupPage("signUpPage") }> Sign-up </a>
                                <span className="p-2"> | </span>

                                <a  style = {{ textDecoration : 'underline', color : 'black', 
                                cursor : 'pointer' }} > Forgot Password
                                </a>
                            </div>
                    </Form>
                )
            }
        }

const mapStateToProps = state => {
    return {
        users: state && state.users
    }
}

export default compose(withRouter, connect(mapStateToProps, null))(LoginPage);


