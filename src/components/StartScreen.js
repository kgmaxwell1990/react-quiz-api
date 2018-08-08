import React, { Component } from 'react';

class StartScreen extends Component {
  state = {
      username: ''
    };

  render() {
    return (
      <div className="container intro">
      <form onSubmit={e => this.props.getUsername(e, this.state.username)}>
      <input className="form-control" required maxLength="20" placeholder="Enter Your Name" value={this.state.username} onChange={evt => this.updateUsername(evt)} autofocus />
      <button className="waves-effect waves-light btn btn-small btn_red">Submit</button>
      </form>
      <div id="greeting"></div>
      <button className="waves-effect waves-light btn btn-large display_none" id="play_button" onClick={this.props.playGame}>Play<i className="material-icons right">send</i></button>
      </div>
    );
  }

  updateUsername(evt) {
    this.setState({
      username: evt.target.value
    });
  }
}
  

export default StartScreen;
