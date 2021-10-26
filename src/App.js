import profileImage from './img/juanitalogo.png';
import './App.css';
import React from 'react';

import Links from './components/Links'

function App() {
  return (
    <Links/>
    <div className="App">
      
      <h2> Login Inicial </h2>
      <img  src={profileImage} alt="profile-image" />
    </div>

  );
}

export default App;
