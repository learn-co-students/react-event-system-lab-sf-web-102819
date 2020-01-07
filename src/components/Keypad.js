// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

  keyUpHandler = () => {
    console.log("Entering password...");
  }

  render() {
    return (
      <div>
        <input type="password" name="some-input" onKeyUp={this.keyUpHandler} ></input>
      </div>
    )
  }
}

export default Keypad
