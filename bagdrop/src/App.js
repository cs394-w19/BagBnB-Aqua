import React, { Component } from 'react';
import './App.css';
import ResultsScreen from './components/resultsScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ResultsScreen />
      </div>
    );
  }
}

export default App;
