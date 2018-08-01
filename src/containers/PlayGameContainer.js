import React, { Component } from 'react';

class PlayGameContainer extends Component {
    
  render() {
    return (
      <div>
        <h1>Play Game </h1>
        <h2> Topic Selected: {this.props.selectedTopic} </h2>
        <button onClick={this.props.handleEndClick}>End Game</button>
      </div>
    );
  }
}

export default PlayGameContainer;