import firebase from "firebase/compat/app";
import "firebase/compat/auth"; 


const app =  firebase.initializeApp({

 apiKey: "AIzaSyB3jqrkFrqJqIjRo29UYr6FeyPUPaPOX8w",
  authDomain: "login-104f8.firebaseapp.com",
  projectId: "login-104f8",
  storageBucket: "login-104f8.appspot.com",
  messagingSenderId: "98866192517",
  appId: "1:98866192517:web:0376aa1e85ee7432c649ec"

})
const auth = app.auth();
export {auth};
export  default app;