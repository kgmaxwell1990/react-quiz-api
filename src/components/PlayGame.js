import React, { Component } from 'react';

class PlayGame extends Component {

  render() {
    return (
      <div>
        {this.props.questionsAnswers}
      </div>
    );
  }
}

export default PlayGame;