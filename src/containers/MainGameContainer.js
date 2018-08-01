import React, { Component } from 'react';
import StartGame from '../components/StartGame';
import PlayGame from '../components/PlayGame';
import EndGame from '../components/EndGame';

class GameContainer extends Component {
    state = {
        startGame: true,
        playGame: false,
        endGame: false
    }
    
    handlePlayClick = () => {
        this.setState({startGame: false, playGame: true});
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
        {this.state.playGame === true ? <PlayGame handleEndClick={this.handleEndClick} />: ""}
        {this.state.endGame === true ? <EndGame handlePlayAgainClick={this.handlePlayAgainClick}/>: ""}
      </div>
    );
  }
}

export default GameContainer;
