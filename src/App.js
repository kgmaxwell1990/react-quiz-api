import React, { Component } from 'react';
import MainGameContainer from './containers/MainGameContainer';

class App extends Component {
  render() {
    return (
      <div className="App container main_container">
        <header className="App-header">
          <h1 className="logo">BRAIN BYTES</h1>
        </header>
        <MainGameContainer />
      </div>
    );
  }
}

export default App;
