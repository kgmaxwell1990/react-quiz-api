import React, { Component } from 'react';
import StartGame from '../components/StartGame';
import PlayGameContainer from '../containers/PlayGameContainer';
import EndGame from '../components/EndGame';

class GameContainer extends Component {
    state = {
        startGame: false,
        playGame: true,
        endGame: false,
        selectedTopic: 0
    }
    
    handlePlayClick = (topic_id) => {
        this.setState({startGame: false, playGame: true, selectedTopic:topic_id});
    }
    
    handleEndClick = () => {
        this.setState({playGame: false, endGame: true});
    }
    
    handlePlayAgainClick = () => {
        this.setState({endGame: false, startGame: true});
    }
    
  render() {
    return (
      <div>
        {this.state.startGame === true ? <StartGame handlePlayClick={this.handlePlayClick}/>: ""}
        {this.state.playGame === true ? <PlayGameContainer selectedTopic={this.state.selectedTopic} handleEndClick={this.handleEndClick} />: ""}
        {this.state.endGame === true ? <EndGame handlePlayAgainClick={this.handlePlayAgainClick}/>: ""}
      </div>
    );
  }
}

export default GameContainer;
