import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FormGroup } from 'react-bootstrap';
import Home from './components/home';
import LoginPage from './components/loginPage';
import Fire from './components/fire';
import fire from './components/fire';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      user: "null"
    }
this.authListener = this.authListener.bind(this);

  }

  componentDidMount(){
    this.authListener();
  }

  authListener=()=>{
  fire.auth().onAuthStateChanged((user)=>{

    if(user) {
      this.setState({user})
    }
    else {
      this.setState({user: null})
    }
  })
  }

render(){
  return(<div>
    {this.state.user ?  (<Home/>) : (<LoginPage/>)}
    </div>
  )
}


}

export default App;