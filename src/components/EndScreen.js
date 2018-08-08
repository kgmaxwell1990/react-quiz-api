import React, { Component } from 'react';

class EndScreen extends Component {

  render() {

    // Sort leaderboard so highest scores go the top
    const sorted_leaderboard = this.props.leaderboard.sort(function(a,b) {
          return b.score < a.score ? -1
          :b.score > a.score ? 1
          : 0
      });

    // Create leaderboard element
    let i = 0
    const leaderboard = sorted_leaderboard.map((person) => {
      i = i+1
      
    return (
          <tr>
            <td>{person.username}</td>
            <td>{person.score}</td>
            <td>
              <span className="badge">
                {i === 1? <i class="fas fa-trophy fa-2x"></i>: ""}
              </span>
            </td>
          </tr>
    );
    
  });
  
    return (
      <div className="row">
      <div className="col s6">
        <h3>{ this.props.score <2 ? "Unlucky ": "" }
            { this.props.score >=2 && this.props.score <3 ? "Keep trying ": "" }
            { this.props.score >=3 && this.props.score <=4? "Well Done ": "" }
            { this.props.score === 5 ? "Top Marks ": "" }
            {this.props.username}! </h3>
        <h5>Your final score is: <br /> {this.props.score} / 5 </h5>

        <button className="waves-effect waves-light btn btn-small btn_red" onClick={this.props.startScreen}>Home<i className="material-icons right">home</i></button>
        <button className="waves-effect waves-light btn btn-small" onClick={this.props.playGame}>Play Again<i className="material-icons right">autorenew</i></button>
      </div>
      <div className="col s6">
        <h5>The Leaderboard </h5>
        <hr />
        <div className="leader_table">
        <table className="centered">
        <tbody>
          {leaderboard}
        </tbody>
      </table>
      </div>
      </div>
      </div>
    );
  }
}

export default EndScreen;