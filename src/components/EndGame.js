import React, { Component } from 'react';

class EndGame extends Component {
    
  render() {
    return (
      <div>
        <h1>End Game</h1>
        <h3> Your score: {this.props.score} / 10 </h3>
        <button onClick={this.props.home}>Home</button>
        <button onClick={this.props.resetAll}>Click To Play Again</button>
      </div>
    );
  }
}

export default EndGame;