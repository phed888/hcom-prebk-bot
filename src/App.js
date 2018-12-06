import React, { Component } from 'react';
import './App.css';
import HCOMHeader from './components/chrome/HCOMHeader';
import SearchHeader from './components/chrome/SearchHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HCOMHeader />
        <SearchHeader />
      </div>
    );
  }
}

export default App;
