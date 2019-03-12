import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {

  componentDidMount() {
    this.game = new Game();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phaser Game</h1>
        </header>
        <div id="gameContainer"></div>
      </div>
    );
  }
}

export default App;
