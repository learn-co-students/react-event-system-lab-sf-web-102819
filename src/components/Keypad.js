import React, { Component } from 'react'

export default class Keypad extends Component {


    heyWorld = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
               <input onKeyUp={this.heyWorld} type="password" />
            </div>
        )
    }
}
