// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import firebase from 'firebase/app'
  import 'firebase/firestore'

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
  const app = initializeApp(firebaseConfig);

  export const db = app.firestore();