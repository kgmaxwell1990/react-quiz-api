import React, { Component } from 'react';
import axios from 'axios';

import StartGame from '../components/StartGame';
import PlayGameContainer from '../containers/PlayGameContainer';
import EndGame from '../components/EndGame';

class GameContainer extends Component {
    state = {
        sessionToken: "",
        startGame: true,
        playGame: false,
        endGame: false,
        username: '',
        qaPre: [],
        timesPlayed: 0,
        score: 0
    }
    
    componentDidMount() {
        axios.get("https://opentdb.com/api_token.php?command=request")
        .then(response => {
            this.setState({sessionToken: response.data.token});
        });
    }
    
    getUsername = (event, name) => {
        event.preventDefault();
        this.setState({username: name.toUpperCase() })
    }
    
    getData = () => {
        if (this.state.timesPlayed === 9) {
            return;
        }
        axios.get("https://opentdb.com/api.php?amount=1&category=18&type=multiple&encode=url3986&token=" + this.state.sessionToken)
        .then(response => {
            this.setState({qaPre: response.data.results});
            this.startGame();
        }); 
        this.setState({timesPlayed: this.state.timesPlayed + 1});
    }
    
    resetAll = () => {
        this.setState({timesPlayed: 0, score: 0});
    }
    
    home = () => {
        this.setState({endGame: false, startGame: true, playGame: false});
    }
    
    startGame = () => {
        this.setState({endGame: false, startGame: false, playGame: true});
    }
    
    endGame = (score) => {
        this.resetAll();
        this.setState({startGame: false, playGame: false, endGame: true, score: score});
    }
    
  render() {
    return (
      <div>
        {this.state.startGame === true ? <StartGame getUsername={this.getUsername} getData={this.getData}/>: ""}
        {this.state.playGame === true ? <PlayGameContainer endGame={this.endGame}  getData={this.getData} qaPre={this.state.qaPre} />: ""}
        {this.state.endGame === true ? <EndGame getData={this.getData} home={this.home} score={this.state.score} username={this.state.username}/>: ""}
      </div>
    );
  }
}

export default GameContainer;
