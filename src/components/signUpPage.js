import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {actions} from '../action';

class SignUpPage extends Component{

    constructor(){
        super();
        this.state={
            Name : "",
            Password : "",
            EmailId: "",
            Occupation: "",
            phonenumber: ""
        }
    }

    navigateFromSignupToLogin =(path) =>{
        this.props.history.push(path);
    }

    handleChange=(e)=>{
console.log(e.target.value);
    }
    
    render(){
        return(
            <Form className="form-style">
                <FormGroup>
                    <Label className="labelClass"> Name: </Label>
                    <Input id="name" placeholder="Enter your name..." onChange={this.handleChange}/>
                    <Label className="labelClass"> Password: </Label>
                    <Input id ="password" type="password" placeholder ="Enter your password..."/>
                    <Label className="labelClass"> EmailId : </Label>
                    <Input id="email" type="email" placeholder= "Enter your mail id..."/>
                    <Label className="labelClass">Occupation: </Label>
                    <Input id="occupation" type="text" placeholder="occupation..."/>
                    <Label className="labelClass">Phone Number: </Label>
                    <Input id="phoneno" type="phonenumber" placeholder="Enter your mobile number..."/>
                </FormGroup>
                <div>
                <Button className="signUp-button" onClick={()=>this.navigateFromSignupToLogin("loginPage")}>SignUp</Button>
                </div>
            </Form>
        )
    }
}

const mapStateToProps = state =>{
    return{
        users :state && state.users
    }
}

const mapDispatchToProps = actions;
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SignUpPage);