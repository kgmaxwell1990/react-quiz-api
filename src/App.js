import React, { Component } from 'react';
import MainGameContainer from './containers/MainGameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">QUIZ GAME</h1>
        </header>
        <hr />
        <MainGameContainer />
      </div>
    );
  }
}

export default App;
