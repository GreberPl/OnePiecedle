import logo from './logo.svg';
import './App.css';
import Piraty from './data/OnePiece.js';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';
import React from 'react';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />  
        <Footer />      
    </div>
  );
}

export default App;
