import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Hero />

      <p>Conteudo aqui nean</p>
    </div>
  );
}

export default App;