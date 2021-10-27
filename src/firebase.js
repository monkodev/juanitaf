
  import firebase from 'firebase/compat/app';
  //import "firebase/firestore";
  //import firebaseConfig from './firebaseConfig'

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2eFjbmk4dwCyfd1XsHSLjjDi39x6diHA",
  authDomain: "juanitaf-a4c25.firebaseapp.com",
  projectId: "juanitaf-a4c25",
  storageBucket: "juanitaf-a4c25.appspot.com",
  messagingSenderId: "299627340461",
  appId: "1:299627340461:web:be37b92ae2cb430f129c24"
};

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = fb.firestore();

export default db


  //export const db = app.firestore();