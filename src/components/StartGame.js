import React, { Component } from 'react';

class StartGame extends Component {

  render() {
    return (
      <div>
        <h1>Ready to Go?</h1>
        <button onClick={this.props.getData}>Play</button>
      </div>
    );
  }
}

export default StartGame;
