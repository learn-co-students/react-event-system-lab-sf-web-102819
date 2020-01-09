// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    constructor() {
        super()
    }

    handleOnFocus = e => {
        console.log('Good!')
    }

    handleOnBlur = e => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <h1>FROM EYESONME</h1>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} type='submit'>Click Me</button>
            </div>
        )
    }
}

export default EyesOnMe