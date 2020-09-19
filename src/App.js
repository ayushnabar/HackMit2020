import React, { Component } from 'react';
import './App.css';
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import Home from './Home/component/Home';
import firebase from 'firebase/app';
import 'firebase/database';


class App extends Component{
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyBXDlxQER-pBOXJ7JZ-5XmouMOYSMFCEog",
      authDomain: "hackmit2020-b2f40.firebaseapp.com",
      databaseURL: "https://hackmit2020-b2f40.firebaseio.com",
      projectId: "hackmit2020-b2f40",
      storageBucket: "hackmit2020-b2f40.appspot.com",
      messagingSenderId: "451276256159",
      appId: "1:451276256159:web:cd825ae052765b2ecc83aa"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(config);
      
    }
    this.db = firebase.database();
    

  }
  render(){
    return (
      <React.Fragment> 
        <Home />
        <ThreadDisplay database = { this.db } />
      </React.Fragment>
        
    );
  }
}

export default App;
