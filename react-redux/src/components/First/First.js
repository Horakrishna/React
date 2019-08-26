import React, {Component} from 'react';

class First extends Component{
    render(){
        
       // console.log(this.props)
        return(
           
            <div>
                <h1>Name:{this.props.name}</h1>
                <h1>Email:{this.props.email}</h1>
                <h1>Address:{this.props.address}</h1>
              
             </div>
        )
    }
}

export default First;