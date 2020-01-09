import React, { Component } from "react";

class Keypad extends Component {
    
  passwordInput = () => {
    console.log("Entering password...");
  };
  render() {
    return (
      <div>
        <input onKeyUp={this.passwordInput} type="password" />
      </div>
    );
  }
}

export default Keypad;
