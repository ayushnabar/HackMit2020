import React, { Component } from 'react';
import './App.css';
// import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import Home from './Home/component/Home';
import fire from "./Firebase/firebase"
import 'firebase/database';
import './SignIn/component/Signin'
import SignIn from './SignIn/component/Signin';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
    this.db = fire.database();
    
  }

  componentDidMount(){
    this.authListener();
  }
  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if(user){
        this.setState({ user });
      //  localStorage.setItem('user', user.uid);
      }else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
      // <ThreadDisplay database = { this.db } />
    });
  }
  

  render(){
    return (
      
      <React.Fragment> 
        <div>
        {this.state.user ? (<Home database = { this.db }/>) : (<SignIn />)}
        </div>
        
        
      </React.Fragment>
        
    );
  }
}

export default App;
