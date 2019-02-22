import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './Router/Router';
import './App.css';
import '../assets/css/new_global_header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
