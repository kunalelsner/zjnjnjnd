// import firebase from 'firebase/app';
// require('firebase/auth');
// require('firebase/firestore');
// require('firebase/storage')


// // import {firebase} from "@firebase/app";
// // import '@firebase/auth'
// // import 'firebase/firestore';
// // import 'firebase/storage';
// // import 'firebase/messaging';

// const config = {
//   apiKey: "AIzaSyBfXybODXWYKj2WdUDRq77T8rNrKuYoPHo",
//   authDomain: "chat-web-app-3ae7d.firebaseapp.com",
//   projectId: "chat-web-app-3ae7d",
//   storageBucket: "chat-web-app-3ae7d.appspot.com",
//   messagingSenderId: "702482000923",
//   appId: "1:702482000923:web:d349c40c16d889ebbf1cbe",
//   measurementId: "G-P8KHFH1837",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// } 

// const firestore = firebase.firestore();
// const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage()


// // const storage = firebase.storage();
// const firebaseMessaging = firebase.messaging();

// // //Custom function made to run firebase service 
// // getStartToken();

// //This code recieve message from server /your app and print message to console if same tab is opened as of project in browser 
// firebaseMessaging.onMessage(function(payload){
// console.log("on Message",payload);
// });

// export {
//   // database,
//    auth,  
//   firestore,
//   googleProvider,
//   storage,
//    firebase,
//   firebaseMessaging
//   // facebookAuthProvider,
// };

// export default firebase;





import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
const firebaseConfig = {
    apiKey: "AIzaSyAyBBfBzgz7E81uPkz-ncGjnc-tbdtdN6Q",
    authDomain: "fir-react-auth-c9030.firebaseapp.com",
    projectId: "fir-react-auth-c9030",
    storageBucket: "fir-react-auth-c9030.appspot.com",
    messagingSenderId: "191848733081",
    appId: "1:191848733081:web:267af32e5d99050c1c9b08"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 



// const storage = firebase.storage();
const messaging = firebase.messaging();


export {
  // database,
   messaging
  // firebaseMessaging
  // facebookAuthProvider,
};

export default firebase;
