import React, { Component } from 'react';
import axios from 'axios';
import StartScreen from '../components/StartScreen';
import PlayGameContainer from '../containers/PlayGameContainer';
import EndScreen from '../components/EndScreen';

class MainGameContainer extends Component {
    state = {
        startScreenSwitch: true,
        playGameSwitch: false,
        endScreenSwitch: false,
        username: '',
        qa: [],
        score: 0,
        leaderboard: []
    }

    componentDidMount() {
        axios.get("https://djangoquizapi.herokuapp.com/questions/")
        .then(response => {
            this.setState({qa:response.data})
        });
            
    }

    getUsername = (e, name) => {
        e.preventDefault();
        document.getElementById("greeting").innerHTML = "<h3 className='ease_in'>Hi " + name + ", press play to start the Quiz!</h3>";
        document.getElementById('play_button').classList.remove('display_none');
        this.setState({ username: name });
    }

    startScreen = () => {
        this.setState({ endScreenSwitch: false, startScreenSwitch: true, playGameSwitch: false });
    }

    playGame = () => {
        this.setState({ endScreenSwitch: false, startScreenSwitch: false, playGameSwitch: true });
    }

    endScreen = (score) => {
        const username = this.state.username;
        const data = {
            username: username,
            score: score
        }
        this.setState({ leaderboard: [...this.state.leaderboard, data] })
        this.setState({ startScreenSwitch: false, playGameSwitch: false, endScreenSwitch: true, score: score });
    }

    render() {
        return (
            <div>
                {this.state.startScreenSwitch === true ? <StartScreen getUsername={this.getUsername} playGame={this.playGame}/>: ""}
                {this.state.playGameSwitch === true ? <PlayGameContainer startScreen={this.startScreen} endScreen={this.endScreen} timesPlayed={this.state.timesPlayed} qa={this.state.qa} />: ""}
                {this.state.endScreenSwitch === true ? <EndScreen startScreen={this.startScreen} playGame={this.playGame} leaderboard={this.state.leaderboard} score={this.state.score} username={this.state.username}/>: ""}
            </div>
        );
    }
}

export default MainGameContainer;
