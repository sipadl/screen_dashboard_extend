import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../src/style.css';
import './App.css';
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
        <Screen1 />
        <Screen2 />
        </>
      </div>
    );
  }
}

export default App;
