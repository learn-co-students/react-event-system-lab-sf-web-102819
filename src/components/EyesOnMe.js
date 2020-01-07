// Code EyesOnMe Component Here
import React, { Component } from 'react'

export class EyesOnMe extends Component {
  onfocusHandler = (event) => {
    console.log("Good!");
  }
  onBlurHandler = (event) => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <div>
        <button onFocus={this.onfocusHandler} onBlur={this.onBlurHandler}>button</button>
      </div>
    )
  }
}

export default EyesOnMe
