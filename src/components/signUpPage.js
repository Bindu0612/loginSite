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

    handleChange=(e, field)=>{
        this.setState({[field]: e.target.value});
    }
    
    validate =()=>{
        const {Name,Password,EmailId,occupation,phonenumber}=this.state;
        this.props.update_users({Name,Password,EmailId,occupation,phonenumber});
        this.navigateFromSignupToLogin("loginPage");
    }

    render(){
        
        return(
            <Form className="form-style">
                <FormGroup>
                    <Label className="labelClass"> Name: </Label>
                    <Input id="name" placeholder="Enter your name..." onChange={e => this.handleChange(e, 'Name')}/>
                    <Label className="labelClass"> Password: </Label>
                    <Input id ="password" type="password" placeholder ="Enter your password..." onChange={e => this.handleChange(e, 'Password')}/>
                    <Label className="labelClass"> EmailId : </Label>
                    <Input id="email" type="email" placeholder= "Enter your mail id..." onChange={e => this.handleChange(e, 'EmailId')}/>
                    <Label className="labelClass">Occupation: </Label>
                    <Input id="occupation" type="text" placeholder="occupation..." onChange={e => this.handleChange(e, 'Occupation')}/>
                    <Label className="labelClass">Phone Number: </Label>
                    <Input id="phoneno" type="phonenumber" placeholder="Enter your mobile number..." onChange={e => this.handleChange(e, 'phonenumber')}/>
                </FormGroup>
                <div>
                <Button className="signUp-button" onClick={()=>this.validate()}>SignUp</Button>
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