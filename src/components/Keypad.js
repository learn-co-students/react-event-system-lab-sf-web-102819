// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleTyping = (event)=>{
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <input  type="password" onKeyUp={this.handleTyping}/>
            </div>
        )
    }
}

export default Keypad