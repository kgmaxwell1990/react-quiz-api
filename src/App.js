import React, { Component } from 'react';
import MainGameContainer from './containers/MainGameContainer';

class App extends Component {
  render() {
    return (
      <div className="App container main_container">
        <header className="App-header">
          <img alt="logo" src="https://cdn.pixabay.com/photo/2017/02/11/22/38/quiz-2058883__340.png" width="40%"/>
        </header>
        <MainGameContainer />
      </div>
    );
  }
}

export default App;
