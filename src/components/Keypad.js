// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    constructor() {
        super()
    }

    handleInputText = e => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <label>FROM KEYPAD: </label>
                <input onKeyUp={this.handleInputText} type='password' />
            </div>
        )
    }
}

export default Keypad