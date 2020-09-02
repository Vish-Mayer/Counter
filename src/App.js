import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increment() {
    this.setState({
      number: this.state.number + 1
    });
  }

  decrement() {
    if(this.state.number === 0) {
      this.setState({
        number: 0
      });
    }else {
      this.setState({
        number: this.state.number - 1
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Counter Application</h1>
        <div id="number">{this.state.number}</div>
        <button id="up-btn" onClick={this.increment.bind(this)}>Up</button>
        <button id="down-btn" onClick={this.decrement.bind(this)}>Down</button>
      </div>
    );
  }
}

export default App;
