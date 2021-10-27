import profileImage from './img/juanitalogo.png';
import './App.css';
import React from 'react';

import Links from './components/Links'
import LinkForm from './components/LinkForm'

function App() {
  return (

    <div className="App">
      
      <h2> Login Inicial </h2>
      <img  src={profileImage} alt="profile-image" />
      <>
        <LinkForm />
        <Links />
      </>
    </div>

  );
}

export default App;
