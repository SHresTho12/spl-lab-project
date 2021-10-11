/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./scripts/LogIn/login.js ***!
  \********************************/


const firebaseConfig = {
    apiKey: "AIzaSyDh_wrKcRnhIjxtmk16aaeZTl7-YB6qNRI",
    authDomain: "spl-1-project.firebaseapp.com",
    projectId: "spl-1-project",
    storageBucket: "spl-1-project.appspot.com",
    messagingSenderId: "844344650067",
    appId: "1:844344650067:web:7d9b6f4b4399bd587919a6"
  };



// import firebaseConfig from "./firebase.config.js";
// console.log(firebaseConfig);
// //Html element
 const signInBtn = document.getElementById("signIn");

// //imports
// import { initializeApp } from 'firebase/compact/app';
// // import * as firebase from 'firebase/app';
// // import firebaseConfig from "./firebase.config";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// // var firebase = require('firebase/app');
// // // all 3 are optional and you only need to require them at the start
// // const {getAuth, signInWithPopup, GoogleAuthProvider} = require('firebase/auth');
//setup
 const app = firebase.initializeApp(firebaseConfig);
// var googleProvider = new GoogleAuthProvider();



// //Sign in Event
signInBtn.addEventListener("click",function(event){
    handleSignIn();
    event.preventDefault()
})
// function handleSignIn(){
//     signInWithPopup(getAuth,googleProvider)
//     .then((result) => {
//         console.log(result);
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       alert(error);
//       // ...
//     });

    
// }


var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
function handleSignIn(){

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error);
      alert(error);
      // ...
    });






};
/******/ })()
;
//# sourceMappingURL=login.js.map