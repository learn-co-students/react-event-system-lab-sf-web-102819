// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    handleOnFocus = e => {
        // console.log('Good!')
        this.setState({
            text: 'Good!'
        })
    }

    handleOnBlur = e => {
        // console.log('Hey! Eyes on me!')
        this.setState({
            text: 'Hey! Eyes on me!'
        })
    }

    render() {
        return (
            <div>
                {/* <h1>FROM EYESONME</h1> */}
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} type='submit'>Click Me</button>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default EyesOnMe