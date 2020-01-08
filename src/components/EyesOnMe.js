// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    handleBlur =(event) => {
        console.log("Hey! Eyes on me!")
        
    }

    handleFocus =(event) => {
        console.log("Good!")
    }

        
    render(){
        return(
            <div>
                <button id="button" onBlur={this.handleBlur} onFocus={this.handleFocus}></button>
            </div>
        )
    }
}

export default EyesOnMe