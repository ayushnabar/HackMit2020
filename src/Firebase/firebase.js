import firebase from 'firebase';

const config = {
    
  };
  //if(!firebase.apps.length){
    const fire = firebase.initializeApp(config);
  //}

  export default fire;