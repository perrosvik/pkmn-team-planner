import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import TeamDisplay from './components/TeamDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Team Planner</h1>
        </header>  
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
