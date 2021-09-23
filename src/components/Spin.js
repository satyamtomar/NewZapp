import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spin extends Component {
    render() {
        return (
            <div className="text-center" >
              <img src={spinner} alt="loading"/>  
            </div>
        )
    }
}

export default Spin
