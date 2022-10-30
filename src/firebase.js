// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWw0omMpdLBDvIEBqdLKBeBZvGK46ebnc",
  authDomain: "quiz-web-app-8c786.firebaseapp.com",
  projectId: "quiz-web-app-8c786",
  storageBucket: "quiz-web-app-8c786.appspot.com",
  messagingSenderId: "1091908164962",
  appId: "1:1091908164962:web:5bbd209763a4ab4dd4203b",
});

const db = firebaseApp.firestore();

export { db }