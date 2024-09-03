
import React, { Component } from 'react';


export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
                  timer : 0

        }
      }
        componentDidMount(){
            this.interval = setInterval(() => {
            this.setState({timer : this.state.timer + 1})
            }, 1000);
        }
        componentWillUnmount(){
            clearInterval(this.interval)
        }
        
  render() {
    return (
      <div>
        <h1> Timer </h1>
        <h2> this component was monted from : {this.state.timer} </h2>
       
    </div>
    )
  }
}