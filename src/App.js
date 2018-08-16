import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import TeamDisplay from './components/TeamDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wlcome to Pokemon Team Planner!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
        <div className="section">
        <div className="container">
          <TeamDisplay/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
