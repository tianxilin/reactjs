import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
//import Weather from './Weather';
import Github from './components/Github';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main />
    </div>
  );
}

export default App;
