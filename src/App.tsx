import React from 'react';
import logo from './logo.svg';
import MyButton from './components/button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> The code file currently open in the editor</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MyButton
        border = "black"
        color = "pink"
        height = "200px"
        onClick = { () => {
          console.log("You clicked on the pink circle!")
        }}
        radius = "50%"
        width = "200px"
        children = "I'm a pink circle!"
      ></MyButton>
    </div>
  );
}

export default App;
