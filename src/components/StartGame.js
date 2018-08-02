import React, { Component } from 'react';

class StartGame extends Component {
  state = {
      username: ''
    };

  render() {
    return (
      <div>
      <form onSubmit={e => this.props.getUsername(e, this.state.username)}>
      <input required maxLength="20" placeholder="Enter Your Name" value={this.state.username} onChange={evt => this.updateUsername(evt)}/>
      <input type="submit" value="Done" />
      </form>
      <button onClick={this.props.getData}>Play</button>
      </div>
    );
  }

  updateUsername(evt) {
    this.setState({
      username: evt.target.value
    });
  }
}
  

export default StartGame;
