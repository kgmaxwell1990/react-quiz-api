import React, { Component } from 'react';

class EndGame extends Component {

  render() {
    const sorted_leaderboard = this.props.leaderboard.sort(function(a,b) {
      console.log("sorting")
          return b.score < a.score ? -1
          :b.score > a.score ? 1
          : 0
      });
    const leaderboard = sorted_leaderboard.map((person) => {
    return (
      <h6>{person.username} - {person.score}/10</h6>
    );
  });
  
    return (
      <div className="row">
      <div className="col s6">
        <h3>{ this.props.score <3 ? "Unlucky ": "" }
            { this.props.score >=3 && this.props.score <6 ? "Keep trying ": "" }
            { this.props.score >=6 && this.props.score <=9? "Well Done ": "" }
            { this.props.score === 10 ? "Top Marks ": "" }
            {this.props.username}! </h3>
        <h4>Your final score is: {this.props.score} / 10 </h4>


        <button className="waves-effect waves-light btn btn-small orange" onClick={this.props.home}>Home<i class="material-icons right">home</i></button>
        <button className="waves-effect waves-light btn btn-small" onClick={this.props.getData}>Play Again<i class="material-icons right">autorenew</i></button>
      </div>
      <div className="col s6">
        <h5>The Leaderboard </h5>
        {leaderboard}
      </div>
      </div>
    );
  }
}

export default EndGame;