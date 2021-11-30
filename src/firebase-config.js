import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC2eFjbmk4dwCyfd1XsHSLjjDi39x6diHA",
  authDomain: "juanitaf-a4c25.firebaseapp.com",
  projectId: "juanitaf-a4c25",
  storageBucket: "juanitaf-a4c25.appspot.com",
  messagingSenderId: "299627340461",
  appId: "1:299627340461:web:be37b92ae2cb430f129c24"
};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app)