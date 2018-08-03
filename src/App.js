import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Container/Book/index'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Book></Book>
      </div>
    );
  }
}

export default App;
