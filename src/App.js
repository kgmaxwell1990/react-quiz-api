import React, { Component } from 'react';
import MainGameContainer from './containers/MainGameContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Brain Bytes</h1>
        </header>
        <hr />
        <MainGameContainer />
      </div>
    );
  }
}

export default App;
