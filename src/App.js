import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import CardDisplayPKKM from './components/CardDisplayPKMN.js'

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

        <CardDisplayPKKM name="Test"/>

      </div>
    );
  }
}

export default App;
