import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyDqtEagmVCYY2CvSH4f7F86kznkSU6P0So",
    authDomain: "olx-web-fd8f3.firebaseapp.com",
    databaseURL: "https://olx-web-fd8f3.firebaseio.com",
    projectId: "olx-web-fd8f3",
    storageBucket: "olx-web-fd8f3.appspot.com",
    messagingSenderId: "326722745185",
    appId: "1:326722745185:web:0a4e3f97a304a735facb20",
    measurementId: "G-JYV1Q97M3M"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase;
