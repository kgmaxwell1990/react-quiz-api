import React, { Component } from 'react';

class EndGame extends Component {

    
  render() {
    
    
    
    const leaderboard = this.props.leaderboard.map((person) => {
    return (
      <li>{person.username} - {person.score}</li>
    )
  })
    return (
      <div>
        <h1>End Game</h1>
        <h3>{ this.props.score <=3 ? "Dont quit the day job ": "" }
            { this.props.score >=3 && this.props.score <=6 ? "Keep trying ": "" }
            { this.props.score >=6 && this.props.score <=9? "Well Done ": "" }
            { this.props.score === 10 ? "Top Marks ": "" }
            {this.props.username}! </h3>
        <h3>Your final score is: {this.props.score} / 10 </h3>
        <ul>
        {leaderboard}
        </ul>
        <button onClick={this.props.home}>Home</button>
        <button onClick={this.props.getData}>Play Again</button>
      </div>
    );
  }
}

export default EndGame;