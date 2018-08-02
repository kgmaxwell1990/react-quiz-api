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
        score: 0,
        leaderboard: []
    }
    
    componentDidMount() {
        axios.get("https://opentdb.com/api_token.php?command=request")
        .then(response => {
            this.setState({sessionToken: response.data.token});
        });
    }
    
    getUsername = (event, name) => {
        event.preventDefault();
        document.getElementById("greeting").innerHTML = "Hi " + name + ", press play to start!";
        document.getElementById('play_button').classList.remove('display_none');
        this.setState({username: name });
    }
    
    getData = () => {
        if (this.state.timesPlayed === 10) {
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
        if (this.state.timesPlayed === 10) {
            document.getElementById("next_button").classList.add("display_none")
            document.getElementById("cancel_game_button").classList.add("display_none")
            document.getElementById("finish_game_button").classList.remove("display_none")
            return;
        }
        this.setState({endGame: false, startGame: false, playGame: true});
    }
    
    endGame = (score) => {
      const username = this.state.username;
      
      const data = {
        username: username,
        score: score
      }
     
        this.resetAll();
        this.setState({leaderboard: [...this.state.leaderboard, data]})
        this.setState({startGame: false, playGame: false, endGame: true, score: score});
    }
    
  render() {
      
      
    return (
      <div>
        {this.state.startGame === true ? <StartGame getUsername={this.getUsername} getData={this.getData}/>: ""}
        {this.state.playGame === true ? <PlayGameContainer timesPlayed={this.state.timesPlayed} home={this.home} endGame={this.endGame}  getData={this.getData} qaPre={this.state.qaPre} />: ""}
        {this.state.endGame === true ? <EndGame leaderboard={this.state.leaderboard} getData={this.getData} home={this.home} score={this.state.score} username={this.state.username}/>: ""}
      </div>
    );
  }
}

export default GameContainer;
