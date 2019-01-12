import React, { Component } from 'react';
import './App.css';
import ResultsScreen from './components/resultsScreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: {
        from: '',
        to: '',
        date: null
      }
    }
  }
  render() {
    return (
      <div className="App">
        <ResultsScreen searchParams={this.state.searchParams}/>
      </div>
    );
  }
}

export default App;
