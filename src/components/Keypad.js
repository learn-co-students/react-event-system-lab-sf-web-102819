// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    constructor(props){
        super()
        this.state = {
            inputValue: null
        }
    }

    passwordDetector = (event) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp= {this.passwordDetector} type='password' />
        )
    }
}

export default Keypad
