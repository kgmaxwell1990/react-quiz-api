import React, { Component } from 'react';

class PlayGame extends Component {

  render() {
    return (
      <div>
        {this.props.questionsAnswers}
        <button onClick={this.props.getData}>Next</button>
      </div>
    );
  }
}

export default PlayGame;