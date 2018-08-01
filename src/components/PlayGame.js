import React, { Component } from 'react';

class PlayGame extends Component {
    
  render() {
    return (
      <div>
        <h1>Play Game</h1>
        <button onClick={this.props.handleEndClick}>End Game</button>
      </div>
    );
  }
}

export default PlayGame;