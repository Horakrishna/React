import React, { Component } from 'react'

class Event extends Component{
    state ={
        name:''
    }
    inputHandeler =(e) =>{
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return(
            <div className="event">
                <div className="container my-3">
                    <input onChange={ this.inputHandeler } value={this.state.name} type="text" placeholder="Enter your name"/>
                    <button className="btn btn-primary"  onClick={ (e)=>console.log(e) }>Click me</button>
                    {this.state.name ? <p>Hello Mr.{this.state.name}</p> : ''}
                </div>
            </div>
        )
    }
}
export default Event;
