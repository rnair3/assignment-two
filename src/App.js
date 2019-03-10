import React, { Component } from 'react';

import './App.css';

import Validation from './Validation/Validation';
import CharComp from './CharComp/CharComp';

class App extends Component {

  state = {
      userInput: ''
  }

  printTextHandler = () => {

  }

  inputChangeHandler = (event)=>{
    this.setState({userInput: event.target.value})
  }

  render() {
    let length = 0;

    let texts = null;

    texts = (
        <div>
          {this.state.userInput.split(' ').map(text => {
            return <CharComp text={text}/>
          })}

        </div>
    )
    return (
      <div className="App">
        <h1>Assignment Two: Lists and Conditions</h1>
        <div>
          <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput.length}</p>
          <Validation length={this.state.userInput.length}></Validation>


          {texts}
        </div>
      </div>
    );
  }
}

export default App;
