import React, { Component } from 'react';

class EndGame extends Component {
    
  render() {
    return (
      <div>
        <h1>End Game</h1>
        <button onClick={this.props.handlePlayAgainClick}>Play Again</button>
      </div>
    );
  }
}

export default EndGame;