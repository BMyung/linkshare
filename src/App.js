import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {Professional} from './components/pro/pro';
import {Music} from './components/music/music';
import {Contact} from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Professional />
      <Music />
      <Contact />
    </div>
  );
}

export default App;
