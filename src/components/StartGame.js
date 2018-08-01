import React, { Component } from 'react';

class StartGame extends Component {
  state = {
      topicSelected: 0
  }
  
  setTopic = (topic_id) => {
      this.setState({topicSelected: topic_id});
  }
  
  render() {
    return (
      <div>
        <h1>Start Game</h1>
        <h3>Topics</h3>
        <button onClick={this.setTopic.bind(this, 1)}>General Knowledge</button>
        <button onClick={this.setTopic.bind(this, 2)}>Animals</button>
        <button onClick={this.setTopic.bind(this, 3)}>History</button>
        <button onClick={this.setTopic.bind(this, 4)}>Geography</button>
        <button onClick={this.props.handlePlayClick.bind(this, this.state.topicSelected)}>Play</button>
      </div>
    );
  }
}

export default StartGame;
