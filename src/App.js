import profileImage from './img/juanitalogo.png';
import './App.css';
import React from 'react';

import Links from './components/Links'
import LinkForm from './components/LinkForm'
import Auth from './Auth';

function App() {
  return (

    <div className="App">
      <br />
      <h2> Login Inicial </h2>
      <img  src={profileImage} alt="profile-image" />
      <>
        <p> Usuario: </p>
        <Auth />
      </>
    </div>

  );
}

export default App;
