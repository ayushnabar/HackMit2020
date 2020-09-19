import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBXDlxQER-pBOXJ7JZ-5XmouMOYSMFCEog",
    authDomain: "hackmit2020-b2f40.firebaseapp.com",
    databaseURL: "https://hackmit2020-b2f40.firebaseio.com",
    projectId: "hackmit2020-b2f40",
    storageBucket: "hackmit2020-b2f40.appspot.com",
    messagingSenderId: "451276256159",
    appId: "1:451276256159:web:cd825ae052765b2ecc83aa"
  };
  //if(!firebase.apps.length){
    const fire = firebase.initializeApp(config);
  //}

  export default fire;