import React, { Component } from 'react';

class StartGame extends Component {
    
  render() {
    return (
      <div>
        <h1>Start Game</h1>
        <button onClick={this.props.handlePlayClick}>Play</button>
      </div>
    );
  }
}

export default StartGame;
