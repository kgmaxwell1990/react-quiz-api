import React, { Component } from 'react';

class EndGame extends Component {
    
  render() {
    return (
      <div>
        <h1>End Game</h1>
        <h3>WELL DONE {this.props.username}! </h3>
        <h3>Your final score is: {this.props.score} / 10 </h3>
        <button onClick={this.props.home}>Home</button>
        <button onClick={this.props.getData}>Play Again</button>
      </div>
    );
  }
}

export default EndGame;