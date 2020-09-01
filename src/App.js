import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setState] = React.useState(0)
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div id="value">{counter}</div>
      <button id="up-btn" onClick={ () => setState(counter + 1)}>
        Up
      </button>
      <button id="down-btn">
        Down
      </button>
    </div>
  );
}

export default App;
