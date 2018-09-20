import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    embed: "https://www.youtube.com/embed/"+ "WPt-FVlp2Pw"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Empty Orchestra</h1>
        </header>
        <div>       
          <iframe width="560" height="315" src={this.state.embed} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
