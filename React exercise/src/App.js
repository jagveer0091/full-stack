import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is my app</h1>
      <p>React!</p>
      <h3><u>This is my Display Component </u></h3>
      <br></br>
      <div class='abc'>
      <Display name='john' age='31' birthMonth='june'/>
      <input type='text'/>
      </div>
      <div class='abc'>
      <Display name='Tom' age='35' birthMonth='july'/>
      <input type='text'/>
</div>
      </div>


    );
  }
}

export default App;
