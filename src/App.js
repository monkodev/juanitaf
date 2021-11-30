import profileImage from './img/juanitalogo.png';
import './App.css';
import React from 'react';
import {useState} from "react";
import {auth} from './firebase-config'

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';


function App() {

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [user,setUser]=useState({});

  onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser);});
  

  const login = async () => {
      try{
        const user=await signInWithEmailAndPassword(
          auth,registerEmail,registerPassword

        )
        window.location.assign('/Home.js');
      }
      catch(error){console.log(error.message)};
  }
  const logout =async () => {
      await signOut(auth);
  }

  return (

    <div className="App">
      <br />
      <h2> Login Inicial </h2>
      <img  src={profileImage} alt="profile-image" />
      <h3>Usuario</h3>
      <input placeholder="E-Mail..." onChange={(event)=>{setRegisterEmail(event.target.value)}} /><br /> <br />
      <input placeholder="Contraseña..." onChange={(event)=>{setRegisterPassword(event.target.value)}} /><br /> <br />
      <button onClick={login}>Ingresar</button>
    </div>

  );
}

export default App;
